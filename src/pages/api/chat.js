import OpenAI from "openai";

export const prerender = false;

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

// Catálogo completo extraído del PDF "CATALOGO_GO_ESP"
const CATALOGO_TECNICO = `
INFORMACIÓN CORPORATIVA GRUPO ORTIZ:
- Historia: Fundado en 1959 en Morelia, Michoacán, por Don Nicandro Ortiz. Más de 65 años de trayectoria.
- Perfil: Fabricante más grande de Latinoamérica de polímeros plásticos.
- Presencia: Plantas en Michoacán y Nuevo León. Exporta a 3 continentes. Más de 4000 empleos directos.
- Valores: Integridad, excelencia, trato familiar, innovación. Certificación ISO 9001.
- Capacidad: 4 plantas de bolsas, 2 de malla, 1 de cuerdas, 2 de film estirable, 1 empaque flexible, 1 reciclaje, 3 esquineros, 1 cintas.

LÍNEA 1: PELÍCULA ESTIRABLE (STRETCH FILM)
1. Film Manual Estándar: Para aplicación sin máquina. Calibres 50-90. Elongación 180-200%. Anchos 17-30".
2. Film para Bandas (Banding): Rollos pequeños (3-12") para sustituir cintas/flejes.
3. Film Manual Preestirado: No requiere fuerza del usuario. Calibres delgados (25-35). Mayor rendimiento.
4. Film Máquina Estándar: Para máquinas de baja/media velocidad. Estiramiento 230-250%.
5. Film Máquina Premium: Estiramiento hasta 280%. Ideal para equipos de brazo/plato giratorio.
6. Opción Biodegradable: Disponible, degradación 90% más rápida.

LÍNEA 2: CINTAS Y ESQUINEROS
- Cinta Adhesiva: Uso general (cierre de cajas), transparente. Adhesivo acrílico/hotmelt.
- Esquineros de Cartón (Kraft y Blanco): Protegen bordes y estiba. Alas desde 1.5x1.5" hasta 3x3". Calibres 0.080" a 0.300".

LÍNEA 3: BOLSAS DE MALLA (AGRICULTURA)
- Usos: Cebolla, papa, cítricos, nueces. Ventilación total.
- Tipos:
  1. Circular: Tejido rafia.
  2. Monofilamento: Alta resistencia.
  3. Costura Lateral (L-Sewn): Con opción de cordón.
  4. Con Etiqueta Laminada: Banda impresa (ej. "Mexican Onions").
- Colores comunes: Amarillo, Verde, Rojo, Morado, Blanco. Capacidad usual 25lb y 50lb.

LÍNEA 4: CUERDAS (ROPES) - 100% Polipropileno Virgen
1. Cuerda T1: Uso general/industrial. Calibres 0.12" (3mm) a 0.98" (25mm).
2. Cuerda Negra UV: Para sector marítimo y agrícola (invernaderos). Alta resistencia solar.
3. Cuerda Eco: Fabricada con enfoque ecológico.
4. Cuerda Reforzada y Cuerda Negra Colorida.
- Características: Alta resistencia a tracción, flotabilidad, no absorbe agua.

LÍNEA 5: RAFIA (TWINE)
- Tipos: Fibrilada T1, Eco, Negra (con/sin UV), Soplada.
- Presentación: Rollos por peso (kg/lb).
- Calibres (Gauges): 2, 3, 4 (Forrajera/Bananera), 6, 8.
- Usos: Amarre agrícola (tomate, pimiento), paquetería, industrial.

LÍNEA 6: EMPAQUE FLEXIBLE (NEO EMPAQUES)
1. Bobina Impresa: Hasta 10 colores, alta definición. Laminados BOPP, PET, PE.
2. Bolsas Stand-Up (Doypack): Con zipper, ventana, fondo plano. Acabados mate, brillante, kraft, metalizado.
3. Bolsas Alto Vacío: Barrera contra oxígeno/humedad. Para carnes, quesos.

LÍNEA 7: SACOS DE RAFIA (WOVEN BAGS)
- Material: Polipropileno tejido.
- Variantes:
  1. Sin Laminar: Harina, azúcar, semillas.
  2. Laminado: Impermeable. Fertilizantes, químicos.
  3. Microperforado: Laminado pero respira.
  4. Laminado BOPP: Impresión fotográfica alta calidad (Sacos comida mascota/Pet Food).
  5. Fondo Plano y Valvulado: Para llenado automático y mejor estiba (Cemento, materiales construcción).
  6. Con Liner: Bolsa interior de PE para máxima protección.
  7. Ecológico: Material reciclado.
`;

const LANGUAGES_MAP = {
  'es': 'Spanish',
  'en': 'English',
  'pt': 'Portuguese',
  'zh': 'Chinese (Simplified)',
  'ar': 'Arabic'
};

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { messages, language } = body;

    // Determinamos el idioma objetivo (default Spanish)
    const targetLang = LANGUAGES_MAP[language] || 'Spanish';

    const SYSTEM_PROMPT = `
    Eres BotGo, el asistente experto en ventas y técnico de Grupo Ortiz.
    
    *** INSTRUCCIÓN PRIORITARIA DE IDIOMA ***
    Tu respuesta debe ser SIEMPRE en el idioma: **${targetLang}**.
    Debes traducir mentalmente la información del catálogo (que está en español) al ${targetLang} para que suene natural y profesional.
    (Ejemplo: Si es inglés, usa "Stretch Film" en lugar de "Película Estirable", "Tensile Strength" en lugar de "Resistencia a la tracción").

    TU BASE DE CONOCIMIENTO (CATÁLOGO):
    ${CATALOGO_TECNICO}

    GUÍA DE COMPORTAMIENTO:
    1. **Experto pero accesible:** Responde dudas técnicas (calibres, elongación, materiales) con precisión basada en el catálogo.
    2. **Estructura visual:** Usa "Bullet points" (-) para listas de productos o características. No escribas párrafos gigantes.
    3. **Enfoque comercial:** Si preguntan por un producto, menciona brevemente sus ventajas o variantes disponibles.

    REGLA DE ETIQUETADO DE VENTA:
    Si y SOLO SI el usuario muestra una intención clara de compra o cotización (ej: "¿qué precio tiene?", "quiero comprar", "cotízame", "price", "quote", "cost"), añade al final de tu respuesta la etiqueta exacta: [[VENTA_DETECTADA]].
    No uses la etiqueta si solo hacen preguntas técnicas generales.
    `;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      model: "gpt-4o-mini", 
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