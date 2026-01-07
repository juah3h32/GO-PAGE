export const zh = {
    nav: {
      home: '首頁',
      products: '產品',
      catalog: '目錄',
      promos: '優惠',
      about: '關於我們',
      company: '公司簡介',
      social: '社會責任',
      distributor: '經銷商',
      contact: '聯絡我們'
    },
    hero: { title: "歡迎", subtitle: "持久的品質" },
    common: { 
        seeMore: "查看更多", 
        buy: "購買", 
        redirecting: "正在跳轉..." 
    },

    // =================================================
    // NEW SECTION: CHATBOT (BotGo) - CHINESE (Traditional)
    // =================================================
    chatbot: {
      greeting: '您好！我是 BotGo 🤖。請問今天有什麼可以幫您的？',
      placeholder: '輸入訊息...',
      listening: '正在聆聽...',
      error: '連線錯誤。',
      salesBtn: '詢價',
      voiceCode: 'zh-TW', // Código para voz en Chino Tradicional (Taiwán)
      waStart: '您好 Grupo Ortiz，我有興趣詢價'
    },

    // Lista principal para el carrusel de /productos
    products_list: [
      { 
        img: "img1.png", 
        division: "拉伸膜", // Stretch Film
        descripcion: "製造用於農業包裝的工業網袋。",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "繩索", // Cuerdas
        descripcion: "用於工業用途的高強度繩索和纜繩。",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "拉菲草", // Rafia (PP Raffia)
        descripcion: "用於包裝和貨物的拉菲草解決方案。",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "拉菲草", 
        descripcion: "客製化軟包裝。",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "編織袋", // Sacos
        descripcion: "工業技術紡織品。",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "護角", // Esquineros
        descripcion: "量身定做的開發。",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- DATOS ESPECÍFICOS DE LA PÁGINA DE CUERDAS ---
    cuerdas: {
      meta_title: "繩索 | Grupo Ortiz",
      back_aria: "返回",
      loading: "載入中...",
      specs_title: "技術規格",
      
      // Etiquetas fijas de la tabla
      specs_labels: {
        load: "性能",         // Rendimiento
        unit: "單位",         // Unidad
        mat: "材質",          // Material
        weight: "重量 / 延伸率", // Peso / Elongación
        resist: "強度",         // Resistencia
        charge: "負荷 / 強度"   // Carga / Resistencia
      },
  
      // Array de productos
      products: [
        { 
          // ID 0
          name: '繩索 T1', 
          img: '/images/cuerdas/CuerdaT1.webp', 
          link: '#', 
          description: "多功能且耐用的繩索，採用優質材料製造。專為承受從輕負荷到重型工業作業而設計。其 3 股和 4 股結構提供了完美的平衡。",
          specs_values: { 
            load: "939 m", 
            unit: "1", 
            mat: "PP-V", 
            weight: "21 kg", 
            resist: "390 KG", 
            charge: "優異" 
          }
        },
        { 
          // ID 1
          name: '繩索 UV 6', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "帶有抗紫外線濾鏡的聚丙烯纜繩，專為抵禦海洋和田野的高強度日曬而設計。確保在大型溫室大棚中的堅固性和長壽命，非常適合漿果、甜椒種植及海事用途。",
          specs_values: { 
            load: "3,240 m", 
            unit: "1", 
            mat: "PP-UV", 
            weight: "18 kg", 
            resist: "105 kg", 
            charge: "優異" 
          }
        },
        { 
           // ID 2
          name: '繩索 UV 8', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "帶有抗紫外線濾鏡的聚丙烯纜繩，專為抵禦海洋和田野的高強度日曬而設計。確保在大型溫室大棚中的堅固性和長壽命，非常適合漿果、甜椒種植及海事用途。",
          specs_values: { 
            load: "2500 kg", 
            unit: "16 mm", 
            mat: "Nylon-X", 
            weight: "1%", 
            resist: "高", 
            charge: "優異" 
          }
        }
      ]    
    }
};