export const zh = {
    nav: {
      home: '首頁',
      products: '產品中心',
      catalog: '產品目錄',
      promos: '促銷活動',
      about: '關於我們',
      company: '公司簡介',
      social: '社會責任',
      distributor: '經銷專區',
      contact: '聯絡我們'
    },
    hero: { title: "歡迎光臨", subtitle: "持久卓越的品質" },
    common: { 
        seeMore: "查看更多", 
        buy: "購買", 
        redirecting: "正在跳轉..." 
    },

    // =================================================
    // CHATBOT SECTION (BotGo)
    // =================================================
    chatbot: {
      greeting: '您好！我是 BotGo 🤖。今天有什麼可以為您服務的嗎？',
      placeholder: '輸入訊息...',
      listening: '正在聆聽...',
      error: '連線錯誤。',
      salesBtn: '詢價',
      voiceCode: 'zh-TW', // Código para voz em Chinês Tradicional (Taiwan)
      waStart: '您好 Grupo Ortiz，我有興趣詢價'
    },
    
    // Lista principal para el carrusel de /productos
    products_list: [
      { 
        img: "img1.png", 
        division: "STRETCH FILM", // 纏繞膜
        descripcion: "製造用於農業包裝的工業網袋。",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "ROPES", // 繩索
        descripcion: "工業用高強度繩索與纜繩。",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "RAFIA", // 拉菲草
        descripcion: "用於包裝和裝載的拉菲草解決方案。",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "RAFIA", 
        descripcion: "客製化柔性包裝。",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "SACKS", // 編織袋
        descripcion: "工業技術紡織品。",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "CORNER BOARDS", // 護角板
        descripcion: "量身定制的開發方案。",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- DATOS ESPECÍFICOS DE LA PÁGINA DE CUERDAS ---
    cuerdas: {
      meta_title: "繩索 | Grupo Ortiz",
      back_aria: "返回",
      loading: "載入中...",
      specs_title: "技術規格",
      
      specs_labels: {
        load: "產量/性能",
        unit: "單位",
        mat: "材質",
        weight: "重量 / 延伸率",
        resist: "抗性",
        charge: "負荷 / 耐用度"
      },
  
      products: [
        { 
          name: '繩索 T1 (ROPE T1)', 
          img: '/images/cuerdas/CuerdaT1.webp', 
          link: '#', 
          description: "多功能且耐用的繩索，採用優質材料製造。專為承受輕負載至重型工業作業而設計。其 3 股和 4 股結構提供了完美的平衡。",
          specs_values: { 
            load: "939 m", 
            unit: "1", 
            mat: "PP-V", 
            weight: "21 kg", 
            resist: "390 KG", 
            charge: "極佳" 
          }
        },
        { 
          name: '繩索 UV 6 (ROPE UV 6)', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "含抗紫外線濾光劑的聚丙烯纜繩，專為抵抗海洋和田野的高強度日曬而設計。確保在大型溫室中的穩固性和長壽命，非常適合漿果、甜椒種植及海事用途。",
          specs_values: { 
            load: "3,240 m", 
            unit: "1", 
            mat: "PP-UV", 
            weight: "18 kg", 
            resist: "105 kg", 
            charge: "極佳" 
          }
        },
        { 
          name: '繩索 UV 8 (ROPE UV 8)', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "含抗紫外線濾光劑的聚丙烯纜繩，專為抵抗海洋和田野的高強度日曬而設計。確保在大型溫室中的穩固性和長壽命，非常適合漿果、甜椒種植及海事用途。",
          specs_values: { 
            load: "2500 kg", 
            unit: "16 mm", 
            mat: "Nylon-X", 
            weight: "1%", 
            resist: "高", 
            charge: "極佳" 
          }
        }
      ]   
    },

    // =================================================
    // DISTRIBUTOR SECTION
    // =================================================
    distributor: {
      hero_title: "我想成為經銷商",
      hero_desc: "加入我們的網絡。留下您的資料，我們的商務顧問將會聯繫您以確認您的所在區域。",
      
      form_title: "申請資料",
      label_name: "全名 *",
      placeholder_name: "例如：王大明",
      label_company: "公司名稱",
      placeholder_company: "例如：北方貿易公司",
      label_phone: "手機 / WhatsApp *",
      placeholder_phone: "例如：55 1234 5678",
      label_city: "城市與省份 *",
      placeholder_city: "例如：台北市",
      
      label_products: "您對哪些產品感興趣？",
      products_list: [
        "拉菲草 (Rafia)",
        "網袋 (Mesh Bags)",
        "纏繞膜 (Stretch Film)",
        "繩索 (Rope)",
        "護角板 (Corner Boards)",
        "編織袋 (Sacks)"
      ],
      
      btn_cancel: "取消",
      btn_submit: "送出資料"
    }
    
};