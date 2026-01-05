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
        buy: "Buy Now", 
        redirecting: "Redirecting..." 
      },
    products_list: [
      { 
        img: "img1.png", 
        division: "STRETCH FILM", 
        descripcion: "Manufacture of industrial mesh bags for agricultural packaging.",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "ROPES", 
        descripcion: "High resistance ropes and cords for industrial use.",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "RAFFIA", 
        descripcion: "Raffia solutions for packaging and loading.",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "RAFFIA", 
        descripcion: "Custom flexible packaging.",
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
        division: "CORNERS", 
        descripcion: "Custom developments.",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- NEW SECTION: ROPE PAGE DATA (CUERDAS) ---
    cuerdas: {
      meta_title: "Ropes | Grupo Ortiz",
      back_aria: "Back",
      loading: "Loading...",
      specs_title: "TECHNICAL SPECIFICATIONS",
      
      // Table labels
      specs_labels: {
        load: "Performance",    // Rendimiento
        unit: "Unit",           // Unidad
        mat: "Material",        // Material
        weight: "Weight / Elongation", // Peso / Elongación
        resist: "Resistance",   // Resistencia
        charge: "Load / Strength" // Carga
      },
  
      // Translated Products Array
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
          name: 'ROPE UV', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Polypropylene cable with UV filter, designed to resist high solar exposure at sea and in the field. Guarantees firmness and long service life in macrotunnels, ideal for berry crops, peppers, and maritime use.",
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
          // ID 2 (3D Model)
          name: 'ROPE ECO', 
          img: '/images/img3.png', 
          link: '#',
          description: "Polypropylene rope in multiple gauges, colors, and presentations, with or without reinforcement. Versatile solution for general use in industries, warehouses, hardware stores, workshops, machining, and wholesale markets.",
          specs_values: { 
            load: "1200 kg", 
            unit: "10 mm", 
            mat: "Eco-Fib", 
            weight: "6%", 
            resist: "Medium", 
            charge: "Moderate" 
          }
        },
        { 
           // ID 3
          name: 'MESH BAG (ARPILLA)', 
          img: '/images/img5.png', 
          link: '#',
          description: "Maximum breaking load to secure your products during transport and storage.",
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