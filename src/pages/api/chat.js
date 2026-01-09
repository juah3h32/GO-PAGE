import OpenAI from "openai";

// Esto indica a Astro que esta ruta es dinámica (Server Side Rendering)
export const prerender = false;

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

/**
 * BASE DE CONOCIMIENTO: GRUPO ORTIZ (GO)
 */
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

const LANGUAGES_MAP = {
  'es': 'Spanish',
  'en': 'English',
  'pt': 'Portuguese',
  'zh': 'Chinese (Simplified)',
  'ar': 'Arabic',
  'fr': 'French'
};

export async function POST({ request }) {
  // 1. Validación de seguridad básica
  if (!import.meta.env.OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: "Falta configuración del servidor (API KEY)" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const body = await request.json();
    const { messages, language } = body;

    // Validación de entrada
    if (!messages || !Array.isArray(messages)) {
        return new Response(JSON.stringify({ error: "Formato de mensajes inválido" }), { status: 400 });
    }

    const targetLang = LANGUAGES_MAP[language] || 'Spanish';

    // Construcción del System Prompt
    const SYSTEM_PROMPT = `
    Eres BotGo, el asistente virtual experto en ventas de **Grupo Ortiz (GO)**.
    
    *** REGLA DE CONTEXTO "GO" ***
    Si el usuario menciona "GO", "go" o "Go", interpreta que es **Grupo Ortiz**.

    *** REGLA DE PRESENTACIÓN DE PRODUCTOS ***
    1. **Pregunta General:** Si preguntan "¿qué venden?" o por el catálogo general:
       - Muestra SOLO la lista de las **7 CATEGORÍAS** (Resumen).
       - NO des detalles técnicos aún. Pregunta qué línea les interesa.
    2. **Pregunta Específica:** Si preguntan por un producto específico (ej: "Rafia"), da el detalle técnico de esa sección.

    *** INSTRUCCIONES DE RESPUESTA ***
    - Idioma de respuesta: **${targetLang}**.
    - Tono: Profesional, amable y orientado a la venta.
    - **IMPORTANTE:** Usa la información de la base de datos, pero NO incluyas códigos de citación como o en tu respuesta final. Habla naturalmente.

    *** BASE DE CONOCIMIENTO ***
    ${CATALOGO_TECNICO}

    *** DETECCIÓN DE VENTA ***
    Si el usuario muestra intención clara de compra (palabras: precio, cotizar, comprar, costo, quote), añade al FINAL de tu respuesta (en una línea nueva y sola):
    [[VENTA_DETECTADA]]
    `;

    // 2. Optimización de Contexto: Enviamos solo los últimos 8 mensajes para no gastar tokens excesivos
    // Mantenemos siempre el mensaje del sistema primero
    const recentMessages = messages.slice(-8); 
    
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT }, 
        ...recentMessages
      ],
      model: "gpt-4o-mini", 
      temperature: 0.3,
      max_tokens: 600, // Límite de seguridad para la respuesta
    });

    return new Response(JSON.stringify({
      reply: completion.choices[0].message.content
    }), { 
      status: 200,
      headers: { "Content-Type": "application/json" } // Importante para el frontend
    });

  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Error procesando la solicitud" }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}