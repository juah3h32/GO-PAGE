export const es = {
    nav: {
      home: 'INICIO',
      products: 'PRODUCTOS',
      catalog: 'Catálogo',
      promos: 'Promociones',
      about: 'NOSOTROS',
      company: 'La Empresa',
      social: 'Impulso Social',
      distributor: 'DISTRIBUIDOR',
      contact: 'CONTACTO'
    },
    hero: { title: "Bienvenidos", subtitle: "Calidad que perdura" },
    common: { 
        seeMore: "Ver más", 
        division: "División", // <--- AGREGAR ESTO
        buy: "Comprar", 
        redirecting: "Redirigiendo..." 
    },

    // =================================================
    // NUEVA SECCIÓN: CHATBOT (BotGo)
    // =================================================
    chatbot: {
      greeting: '¡Hola! Soy BotGo 🤖. ¿En qué puedo asesorarte hoy?',
      placeholder: 'Escribe un mensaje...',
      listening: 'Escuchando...',
      error: 'Error de conexión.',
      salesBtn: 'Cotizar',
      voiceCode: 'es-ES',
      waStart: 'Hola Grupo Ortiz, me interesa cotizar'
    },
    
    // Lista principal para el carrusel de /productos
    products_list: [
      { 
        img: "img1.png", 
        division: "STRETCH FILM", 
        descripcion: "Película Estirable de óptica cristalina y altos estándares de calidad. Garantiza la integridad de la carga y eficiencia en costos. Nuestra línea incluye una opción Biodegradable, formulada para degradarse un 90% más rápido sin sacrificar propiedades mecánicas, uniendo resistencia industrial y responsabilidad ambiental.",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "CUERDAS", 
        descripcion: "Cuerda de Filamentos de Polipropileno (PP) de alto rendimiento. Gracias a su fabricación híbrida con materiales de alta y baja densidad, logramos un equilibrio perfecto: extrema ligereza sin sacrificar la resistencia a la rotura. Una solución flexible y duradera diseñada para trabajos exigentes.",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "RAFIA", 
        descripcion: "Rafia de Película de Polipropileno (PP) de alto desempeño. Su fabricación con materiales de alta y baja densidad garantiza un equilibrio ideal: gran ligereza y elevada resistencia a la rotura. Un producto flexible y versátil, diseñado para ofrecer el máximo rendimiento en el atado.",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "ARPILLA", 
        descripcion: "Arpillas de Rafia de Polipropileno en tejido plano con costura reforzada tipo 'L'. La incorporación de monofilamento otorga una resistencia superior, facilitando la manipulación y el transporte. Su diseño ventilado de alta calidad conserva la frescura del producto, ideal para frutas, verduras y hortalizas.",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "SACOS", 
        descripcion: "Sacos de Rafia de calidad superior, resultado de tecnología de última generación y materia prima seleccionada. Ofrecen una solución de envasado robusta y confiable, ideal para una amplia gama de industrias: desde alimentos (harinas, azúcar) hasta productos químicos y fertilizantes.",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "ESQUINEROS", 
        descripcion: "Esquineros de cartón diseñados para optimizar la logística. Proporcionan resistencia estructural y mejoran la estabilidad de la carga, permitiendo mantener la tensión adecuada del film para una distribución uniforme y segura durante el transporte.",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- DATOS ESPECÍFICOS DE LA PÁGINA DE CUERDAS ---
    cuerdas: {
      meta_title: "Cuerdas | Grupo Ortiz",
      back_aria: "Volver",
      loading: "Cargando...",
      specs_title: "ESPECIFICACIONES TÉCNICAS",
      
      specs_labels: {
        load: "Rendimiento",
        unit: "Unidad",
        mat: "Material",
        weight: "Peso / Elongación",
        resist: "Resistencia",
        charge: "Carga / Resistencia"
      },
  
      products: [
        { 
          name: 'CUERDA T1', 
          img: '/images/cuerdas/CuerdaT1.webp', 
          link: '#', 
          description: "Cuerda versátil y duradera fabricada con materiales de primera calidad. Diseñada para soportar desde cargas ligeras hasta trabajo pesado industrial. Su construcción de 3 y 4 cabos ofrece un equilibrio perfecto.",
          specs_values: { 
            load: "939 m", 
            unit: "1", 
            mat: "PP-V", 
            weight: "21 kg", 
            resist: "390 KG", 
            charge: "Excelente" 
          }
        },
        { 
          name: 'CUERDA UV 6', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Cable de polipropileno con filtro UV, diseñado para resistir alta exposición solar en mar y campo. Garantiza firmeza y larga vida útil en macrotúneles, ideal para cultivos de berries, pimiento y uso marítimo.",
          specs_values: { 
            load: "3,240 m", 
            unit: "1", 
            mat: "PP-UV", 
            weight: "18 kg", 
            resist: "105 kg", 
            charge: "Excelente" 
          }
        },
        { 
          name: 'CUERDA UV 8', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Cable de polipropileno con filtro UV, diseñado para resistir alta exposición solar en mar y campo. Garantiza firmeza y larga vida útil en macrotúneles, ideal para cultivos de berries, pimiento y uso marítimo.",
          specs_values: { 
            load: "2500 kg", 
            unit: "16 mm", 
            mat: "Nylon-X", 
            weight: "1%", 
            resist: "Alta", 
            charge: "Excelente" 
          }
        }
      ]   
    },

    // =================================================
    // NUEVA SECCIÓN: DISTRIBUIDOR
    // =================================================
    distributor: {
      hero_title: "Quiero ser Distribuidor",
      hero_desc: "Únete a nuestra red. Déjanos tus datos y un asesor comercial te contactará para validar tu zona.",
      
      form_title: "Datos de Solicitud",
      label_name: "Nombre Completo *",
      placeholder_name: "Ej. Juan Pérez",
      label_company: "Nombre de Empresa",
      placeholder_company: "Ej. Comercializadora Norte",
      label_phone: "Celular / WhatsApp *",
      placeholder_phone: "Ej. 55 1234 5678",
      label_city: "Ciudad y Estado *",
      placeholder_city: "Ej. Morelia, Michoacán",
      
      label_products: "¿Qué productos le interesan?",
      products_list: [
        "Rafia",
        "Arpilla",
        "Stretch Film",
        "Cuerda",
        "Esquinero",
        "Sacos"
      ],
      
      btn_cancel: "CANCELAR",
      btn_submit: "ENVIAR DATOS"
    }
    
};