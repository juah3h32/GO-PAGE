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

const CATALOGO_TECNICO = `
=== IDENTIDAD CORPORATIVA (CONTEXTO "GO") ===
- Entidad: Grupo Ortiz (a menudo referido como "GO" o "go").
- Historia: Fundado en 1959 en Morelia, Michoacán, por Don Nicandro Ortiz.
- Estatus: Fabricante más grande de Latinoamérica de polímeros plásticos.
- Alcance: Exportación a 3 continentes, más de 4000 empleos directos.
- Ubicación: Plantas en Michoacán y Nuevo León.
- Infraestructura: 10 unidades de negocio (plantas de bolsas, malla, cuerdas, film, reciclaje, etc.).
- Certificación: ISO 9001.

=== LISTADO GENERAL DE CATEGORÍAS (RESUMEN) ===
1. Película Estirable (Stretch Film)
2. Cintas y Esquineros
3. Bolsas de Malla (Mesh Bags)
4. Cuerdas (Ropes)
5. Rafia (Twine)
6. Empaque Flexible (Neo Empaques)
7. Sacos de Rafia (Woven Bags)

=== DETALLE TÉCNICO (SOLO USAR SI SE SOLICITA DETALLE) ===

1. PELÍCULA ESTIRABLE (STRETCH FILM):
- Manual Estándar: Calibres 50-90. Elongación 180-200%.
- Para Bandas (Banding): Rollos pequeños (3-12") para sustituir cintas.
- Manual Preestirado: Calibres delgados (25-35), aplicación sin esfuerzo.
- Máquina Estándar: Estiramiento 230-250%.
- Máquina Premium: Estiramiento hasta 280%.
- Biodegradable: Degradación 90% más rápida.

2. CINTAS Y ESQUINEROS:
- Cinta Adhesiva: Transparente, adhesivo acrílico/hotmelt.
- Esquineros de Cartón: Kraft y Blanco. Alas desde 1.5" a 3". Calibres 0.080-0.300".

3. BOLSAS DE MALLA:
- Usos: Cebolla, papa, cítricos. Ventilación total.
- Tipos: Circular (tejido), Monofilamento (alta resistencia), Costura Lateral (L-Sewn).
- Personalización: Banda impresa (Etiqueta laminada). Colores variados.

4. CUERDAS (ROPES):
- Material: 100% Polipropileno.
- Variantes: T1 (Industrial), Negra con filtro UV (Agrícola/Marítima), Eco (Sostenible), Reforzada.
- Calibres: Desde 3mm (0.12") hasta 25mm (0.98").

5. RAFIA (TWINE):
- Tipos: Fibrilada T1, Eco, Negra (con/sin UV), Soplada.
- Calibres: 2, 3, 4, 6, 8 gramos.
- Usos: Amarre de tomate, pimiento, paquetería.

6. EMPAQUE FLEXIBLE:
- Bobina Impresa: Hasta 10 colores, alta definición.
- Bolsas Stand-Up (Doypack): Con zipper, ventana, fondo plano. Acabados mate/brillante.
- Bolsa Alto Vacío: Barrera oxígeno/humedad (Carnes, quesos).

7. SACOS DE RAFIA (WOVEN BAGS):
- Sin Laminar: Harina, azúcar, semillas.
- Laminados: Fertilizantes (impermeables).
- BOPP: Impresión fotográfica (Pet Food).
- Valvulados / Fondo Plano: Llenado automático (Cemento).
- Con Liner: Bolsa interior protectora.
`;


// --- HELPER AUDIO ---
async function generarAudio(texto, idiomaCode) {
  let cleanText = texto.replace(/\[\[.*?\]\]/g, '').replace(/[*#\-]/g, ' ').replace(/\s+/g, ' ').trim();
  if (cleanText.length > 200) cleanText = cleanText.substring(0, 198) + "...";
  
  const voiceId = VOICE_MAP[idiomaCode] || VOICE_MAP['es'];

  try {
    const tts = new MsEdgeTTS();
    await tts.setMetadata(voiceId, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    const readable = await tts.toStream(cleanText);
    const chunks = [];
    for await (const chunk of readable) chunks.push(chunk);
    return `data:audio/mp3;base64,${Buffer.concat(chunks).toString("base64")}`;
  } catch (e) {
    try {
      const b64 = await googleTTS.getAudioBase64(cleanText, { lang: idiomaCode||'es', slow:false });
      return `data:audio/mp3;base64,${b64}`;
    } catch (err) { return null; }
  }
}

// --- ENDPOINT ---
export async function POST({ request }) {
  const apiKey = import.meta.env.GEMINI_API_KEY;
  if (!apiKey) return new Response(JSON.stringify({ reply: "❌ ERROR: Falta API Key." }), { status: 200 });

  try {
    const body = await request.json();
    const { messages, language, isVoice = false } = body;
    const targetLang = LANGUAGES_MAP[language] || 'Spanish';
    const langCode = language || 'es';
    let lastUserMessage = messages?.[messages.length - 1]?.content || "Hola";

    // --- PASO 1: DESCUBRIR QUÉ MODELO TIENES REALMENTE ---
    // En lugar de adivinar, pedimos la lista a Google.
    const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const listResp = await fetch(listUrl);
    const listData = await listResp.json();

    if (listData.error) {
        throw new Error(`Error listando modelos (${listData.error.code}): ${listData.error.message}`);
    }

    // Buscamos el primer modelo que sirva para 'generateContent'
    // Preferencia: Flash -> Pro -> Cualquiera
    const availableModels = listData.models || [];
    const validModel = availableModels.find(m => m.name.includes('flash') && m.supportedGenerationMethods.includes('generateContent')) 
                    || availableModels.find(m => m.name.includes('pro') && m.supportedGenerationMethods.includes('generateContent'))
                    || availableModels.find(m => m.supportedGenerationMethods.includes('generateContent'));

    if (!validModel) {
        throw new Error("Tu API Key es válida, pero no tienes acceso a ningún modelo de chat (generateContent).");
    }

    // Usamos el nombre EXACTO que Google nos dio (ej: models/gemini-1.5-flash-001)
    const exactModelName = validModel.name.replace("models/", "");
    console.log("✅ Modelo encontrado y usado:", exactModelName);

    // --- PASO 2: CHATEAR ---
    const chatUrl = `https://generativelanguage.googleapis.com/v1beta/models/${exactModelName}:generateContent?key=${apiKey}`;
    
    const response = await fetch(chatUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ 
          role: "user", 
          parts: [{ text: `Eres BotGo de Grupo Ortiz (GO). Idioma: ${targetLang}. Base de datos: ${CATALOGO_TECNICO}. Usuario dice: "${lastUserMessage}"` }] 
        }]
      })
    });

    const data = await response.json();

    if (data.error) {
        throw new Error(`Error Chat (${data.error.code}): ${data.error.message}`);
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sin respuesta.";

    // --- AUDIO ---
    let audioUrl = null;
    if (isVoice) audioUrl = await generarAudio(replyText, langCode);

    return new Response(JSON.stringify({ reply: replyText, audio: audioUrl }), { status: 200 });

  } catch (error) {
    console.error("❌ FALLO:", error.message);
    return new Response(JSON.stringify({ 
        reply: `Error Técnico: ${error.message}`, 
        audio: null 
    }), { status: 200 });
  }
}