import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import * as googleTTS from 'google-tts-api';

export const prerender = false;

// --- CONFIGURACIÓN DE VOZ ---
const VOICE_MAP = {
  es: "es-MX-DaliaNeural",      
  en: "en-US-JennyNeural",      
  pt: "pt-BR-FranciscaNeural",  
  fr: "fr-FR-DeniseNeural",     
  zh: "zh-CN-XiaoxiaoNeural",   
  ar: "ar-EG-SalmaNeural"       
};

const LANGUAGES_MAP = {
  'es': 'Spanish', 'en': 'English', 'pt': 'Portuguese',
  'zh': 'Chinese', 'ar': 'Arabic', 'fr': 'French'
};

// --- BASE DE DATOS RESUMIDA (Para que conteste rápido) ---
const CATALOGO_TECNICO = `
Contexto: BotGo de Grupo Ortiz (Morelia).
Productos:
1. Stretch Film (Película estirable).
2. Cintas y Esquineros.
3. Bolsas de Malla (Frutas/Verduras).
4. Cuerdas y Rafia (Agro/Pesca).
5. Sacos de Rafia (Costales).
`;

// --- 1. FUNCIÓN DE LIMPIEZA TOTAL ---
function limpiarTextoParaAudio(texto) {
  if (!texto) return "";
  return texto
    .replace(/\*\*/g, "") 
    .replace(/\*/g, "")   
    .replace(/#/g, "")    
    .replace(/`/g, "")    
    .replace(/_/g, "")    
    .replace(/~/g, "")    
    .replace(/-/g, "")    
    .replace(/\[.*?\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// --- 2. HELPER STREAM TO BUFFER (CORREGIDO Y SIMPLIFICADO) ---
async function streamToBuffer(readable) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        // Forzamos el manejo como stream de Node estándar
        readable.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        readable.on('end', () => resolve(Buffer.concat(chunks)));
        readable.on('error', (err) => reject(err));
    });
}

// --- 3. GENERADOR DE AUDIO ROBUSTO ---
async function generarAudio(textoOriginal, idiomaCode) {
  const cleanText = limpiarTextoParaAudio(textoOriginal);
  if (!cleanText) return null;

  console.log(`🎤 Generando audio (${cleanText.length} chars)...`);
  
  const voiceId = VOICE_MAP[idiomaCode] || VOICE_MAP['es'];

  // --- INTENTO 1: MsEdgeTTS (Calidad Alta) ---
  try {
    const tts = new MsEdgeTTS();
    await tts.setMetadata(voiceId, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    
    // Usamos toStream y nuestro helper corregido
    const stream = await tts.toStream(cleanText);
    const audioBuffer = await streamToBuffer(stream);
    
    console.log("✅ Audio generado con MsEdgeTTS");
    return `data:audio/mp3;base64,${audioBuffer.toString("base64")}`;

  } catch (e) {
    console.warn("⚠️ Falló MsEdgeTTS:", e.message);
    console.log("🔄 Intentando GoogleTTS (Modo Texto Largo)...");
    
    // --- INTENTO 2: GoogleTTS (Con soporte para texto largo) ---
    try {
      // Usamos getAllAudioBase64 que divide el texto automáticamente
      const results = await googleTTS.getAllAudioBase64(cleanText, { 
          lang: idiomaCode || 'es', 
          slow: false, 
          host: 'https://translate.google.com', 
          timeout: 10000,
          splitPunct: '.,!?' // Divide por puntuación para que suene natural
      });

      // results es un array de objetos { base64, shortText }
      // Unimos todos los base64 en uno solo. 
      // NOTA: Concatenar base64 de MP3 funciona en la mayoría de navegadores modernos.
      const fullBase64 = results.map(r => r.base64).join('');

      console.log("✅ Audio generado con GoogleTTS (Concatenado)");
      return `data:audio/mp3;base64,${fullBase64}`;

    } catch (err) { 
      console.error("❌ Error total audio:", err.message);
      return null; 
    }
  }
}

// --- 4. ENDPOINT PRINCIPAL ---
export async function POST({ request }) {
  const apiKey = import.meta.env.OPENAI_API_KEY; 
  if (!apiKey) return new Response(JSON.stringify({ reply: "❌ Falta API Key." }), { status: 200 });

  try {
    const body = await request.json();
    const { messages, language, isVoice = false } = body;
    const targetLang = LANGUAGES_MAP[language] || 'Spanish';
    const langCode = language || 'es';

    // --- OPTIMIZACIÓN PARA VELOCIDAD ---
    // Le pedimos respuestas CORTAS para que el audio se genere rápido y parezca llamada.
    const systemMessage = {
      role: "system",
      content: `Eres BotGo de Grupo Ortiz. 
      DATOS: ${CATALOGO_TECNICO}
      
      INSTRUCCIONES CRÍTICAS:
      1. Responde MUY BREVE (máximo 40 palabras) para simular una llamada fluida.
      2. Sé amable y directo.
      3. No uses listas largas, solo menciona lo principal.
      4. Idioma: ${targetLang}.`
    };

    const finalMessages = [systemMessage, ...messages];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // Modelo rápido
        messages: finalMessages, 
        temperature: 0.5, 
        max_tokens: 150 // Limitamos tokens para forzar velocidad
      })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);

    const replyText = data.choices?.[0]?.message?.content || "Hola.";

    // --- GENERACIÓN DE AUDIO ---
    let audioUrl = null;
    if (isVoice) {
      audioUrl = await generarAudio(replyText, langCode);
    }

    return new Response(JSON.stringify({ reply: replyText, audio: audioUrl }), { status: 200 });

  } catch (error) {
    console.error("❌ FALLO API:", error.message);
    return new Response(JSON.stringify({ reply: "Error de sistema.", audio: null }), { status: 200 });
  }
}