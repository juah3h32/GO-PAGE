export const en = {
    nav: {
      home: 'HOME',
      products: 'PRODUCTS',
      catalog: 'Catalog',
      promos: 'Promotions',
      about: 'ABOUT US',
      company: 'The Company',
      social: 'Social Impact',
      distributor: 'DISTRIBUTOR',
      contact: 'CONTACT'
    },
    hero: { title: "Welcome", subtitle: "Quality that lasts" },
    common: { 
        seeMore: "See more", 
        buy: "Buy", 
        redirecting: "Redirecting..." 
    },

    // =================================================
    // NEW SECTION: CHATBOT (BotGo)
    // =================================================
    chatbot: {
      greeting: 'Hello! I am BotGo 🤖. How can I assist you today?',
      placeholder: 'Type a message...',
      listening: 'Listening...',
      error: 'Connection error.',
      salesBtn: 'Get Quote',
      voiceCode: 'en-US', // Código para voz en inglés
      waStart: 'Hello Grupo Ortiz, I am interested in a quote for'
    },

    // Main list for /products carousel
    products_list: [
      { 
        img: "img1.png", 
        division: "STRETCH FILM", 
        descripcion: "Manufacturing of industrial mesh bags for agricultural packaging.",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "ROPES", 
        descripcion: "High-resistance ropes and cords for industrial use.",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "RAFFIA", 
        descripcion: "Raffia solutions for packaging and cargo.",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "RAFFIA", 
        descripcion: "Customized flexible packaging.",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "SACKS", 
        descripcion: "Industrial technical textiles.",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "CORNER GUARDS", 
        descripcion: "Custom developments.",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- SPECIFIC DATA FOR ROPES PAGE (Cuerdas) ---
    cuerdas: {
      meta_title: "Ropes | Grupo Ortiz",
      back_aria: "Go back",
      loading: "Loading...",
      specs_title: "TECHNICAL SPECIFICATIONS",
      
      // Fixed table labels
      specs_labels: {
        load: "Performance",
        unit: "Unit",
        mat: "Material",
        weight: "Weight / Elongation",
        resist: "Resistance",
        charge: "Load / Resistance"
      },
  
      // Product Array
      products: [
        { 
          // ID 0
          name: 'ROPE T1', 
          img: '/images/cuerdas/CuerdaT1.webp', 
          link: '#', 
          description: "Versatile and durable rope made with premium quality materials. Designed to withstand from light loads to heavy industrial work. Its 3 and 4 strand construction offers a perfect balance.",
          specs_values: { 
            load: "939 m", 
            unit: "1", 
            mat: "PP-V", 
            weight: "21 kg", 
            resist: "390 KG", 
            charge: "Excellent" 
          }
        },
        { 
          // ID 1
          name: 'ROPE UV 6', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Polypropylene cable with UV filter, designed to resist high solar exposure at sea and field. Guarantees firmness and long lifespan in macro-tunnels, ideal for berry crops, peppers, and maritime use.",
          specs_values: { 
            load: "3,240 m", 
            unit: "1", 
            mat: "PP-UV", 
            weight: "18 kg", 
            resist: "105 kg", 
            charge: "Excellent" 
          }
        },
        { 
           // ID 2
          name: 'ROPE UV 8', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Polypropylene cable with UV filter, designed to resist high solar exposure at sea and field. Guarantees firmness and long lifespan in macro-tunnels, ideal for berry crops, peppers, and maritime use.",
          specs_values: { 
            load: "2500 kg", 
            unit: "16 mm", 
            mat: "Nylon-X", 
            weight: "1%", 
            resist: "High", 
            charge: "Excellent" 
          }
        }
      ]    
    }
};