import OpenAI from "openai";

export const prerender = false;

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

// Catálogo base (siempre en Español, la IA lo traducirá)
const CATALOGO_TECNICO = `
DATOS TÉCNICOS GRUPO ORTIZ:
1. PELÍCULA ESTIRABLE (Stretch Film): Manual (Cal 50-90, Elong 180-200%, Carga 3.39 lbf). Máquina (Estiramiento 250-280%).
2. SACOS RAFIA (Woven Bags): Resistencia tela 264-440 lbf. Capacidad 25-50kg. Medidas variables.
3. BOLSAS MALLA (Mesh Bags): 25lb y 50lb. Para Cebolla/Papa.
4. CUERDAS (Ropes): T1 (1/4" 859 lbf, 1" 6392 lbf). Negra con filtro UV.
5. EMPAQUE FLEXIBLE: Stand-up pouches, Alto Vacío.
`;

// Mapa de códigos a nombres completos en inglés (para la instrucción del prompt)
const LANGUAGES_MAP = {
  'es': 'Spanish',
  'en': 'English',
  'pt': 'Portuguese',
  'zh': 'Chinese (Simplified)',
  'ar': 'Arabic' // <--- AGREGAR ESTO IMPORTANTE
};

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { messages, language } = body;

    // Determinamos el idioma objetivo (default Spanish)
    const targetLang = LANGUAGES_MAP[language] || 'Spanish';

    const SYSTEM_PROMPT = `
    Eres BotGo, experto en ventas de Grupo Ortiz.

    *** INSTRUCCIÓN PRIORITARIA ***
    Debes responder ÚNICA Y EXCLUSIVAMENTE en el idioma: **${targetLang}**.
    
    Traduce la información del catálogo técnico a ${targetLang} de forma natural para un cliente nativo.
    (Ejemplo: Si es inglés, usa "Stretch Film", "Tensile Strength", etc.)

    TU ESTILO DE RESPUESTA VISUAL:
    1. **Usa listas:** Usa guiones (-) para enumerar características.
    2. **Espaciado:** Deja una línea en blanco entre párrafos.
    3. **Brevedad:** Sé amable pero directo.

    REGLAS DE COMPORTAMIENTO:
    - Responde dudas técnicas basándote en el catálogo.
    - Si el usuario solo saluda, responde corto en ${targetLang}.

    !!! REGLA DE VENTA ESTRICTA !!!
    SOLO agrega la etiqueta [[VENTA_DETECTADA]] al final si el usuario escribe explícitamente palabras de intención de compra (ej: "precio", "price", "cotizar", "quote", "comprar", "buy").

    Tu catálogo base:
    ${CATALOGO_TECNICO}
    `;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      model: "gpt-4o-mini", // O gpt-3.5-turbo si prefieres
      temperature: 0.3,
    });

    return new Response(JSON.stringify({
      reply: completion.choices[0].message.content
    }), { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Error interno" }), { status: 500 });
  }
}