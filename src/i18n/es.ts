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
        buy: "Comprar", 
        redirecting: "Redirigiendo..." //
      },
    
    
    // Lista principal para el carrusel de /productos
    products_list: [
      { 
        img: "img1.png", 
        division: "STRETCH FILM", 
        descripcion: "Fabricación de arpillas industriales para empaque agrícola.",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "CUERDAS", 
        descripcion: "Cuerdas y cabos de alta resistencia para uso industrial.",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "RAFIA", 
        descripcion: "Soluciones de rafia para embalaje y carga.",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "RAFIA", 
        descripcion: "Empaques flexibles personalizados.",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "SACOS", 
        descripcion: "Textiles técnicos industriales.",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "ESQUINEROS", 
        descripcion: "Desarrollos a la medida.",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- NUEVA SECCIÓN: DATOS ESPECÍFICOS DE LA PÁGINA DE CUERDAS ---
    cuerdas: {
      meta_title: "Cuerdas | Grupo Ortiz",
      back_aria: "Volver",
      loading: "Cargando...",
      specs_title: "ESPECIFICACIONES TÉCNICAS",
      
      // Estas son las etiquetas fijas de la tabla
      specs_labels: {
        load: "Rendimiento",
        unit: "Unidad",
        mat: "Material",
        weight: "Peso / Elongación",
        resist: "Resistencia",
        charge: "Carga / Resistencia"
      },
  
      // Array con la info de cada producto que tenías en JS
      products: [
        { 
          // ID 0
          name: 'CUERDA T1', 
          img: '/images/cuerdas/CuerdaT1.webp', // Asegúrate que esta ruta exista
          link: '#', // Link de compra si lo tienes
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
          // ID 1
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
           // ID 3
          name: 'CUERDA UV 8', 
          img: '/images/cuerdas/CuerdaNegra.webp', // Puse img5 por defecto, ajusta si es otra
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
    }
  };