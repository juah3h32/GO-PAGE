import OpenAI from "openai";

export const prerender = false;

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

const CATALOGO_TECNICO = `
DATOS TÉCNICOS GRUPO ORTIZ:
1. PELÍCULA ESTIRABLE: Manual (Cal 50-90, Elong 180-200%, Carga 3.39 lbf). Máquina (Estiramiento 250-280%).
2. SACOS RAFIA: Resistencia tela 264-440 lbf. Capacidad 25-50kg. Medidas variables.
3. BOLSAS MALLA: 25lb y 50lb. Cebolla/Papa.
4. CUERDAS: T1 (1/4" 859 lbf, 1" 6392 lbf). Negra UV.
5. EMPAQUE FLEXIBLE: Stand-up, Alto Vacío.
`;

const SYSTEM_PROMPT = `
Eres BotGo, experto en ventas de Grupo Ortiz.

TU ESTILO DE RESPUESTA VISUAL (MUY IMPORTANTE):
1. **Usa listas:** Siempre que menciones productos o características, usa guiones (-) para ponerlos en una lista vertical.
2. **Espaciado:** Deja una línea en blanco entre cada idea o párrafo. No escribas bloques de texto gigantes.
3. **Brevedad:** Sé directo.

REGLAS DE COMPORTAMIENTO:
- Responde dudas técnicas amablemente.
- Si el usuario solo saluda, responde corto.

!!! REGLA DE VENTA ESTRICTA !!!
SOLO agrega la etiqueta [[VENTA_DETECTADA]] al final si el usuario escribe explícitamente:
- "Quiero comprar", "pedido", "cotización".
- "¿Cuál es el precio?", "¿Cuánto cuesta?".

Tu catálogo:
${CATALOGO_TECNICO}
`;

export async function POST({ request }) {
  try {
    const body = await request.json();
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...body.messages],
      model: "gpt-4o-mini",
      temperature: 0.3,
    });

    return new Response(JSON.stringify({
      reply: completion.choices[0].message.content
    }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Error interno" }), { status: 500 });
  }
}