export const zh= {
    nav: {
      home: '首頁',
      products: '產品',
      catalog: '目錄',
      promos: '促銷活動',
      about: '關於我們',
      company: '公司簡介',
      social: '社會公益',
      distributor: '經銷商',
      contact: '聯絡我們'
    },
    hero: { title: "歡迎", subtitle: "歷久彌新的品質" },
    common: { 
        seeMore: "查看更多", 
        buy: "購買", 
        redirecting: "正在重新導向..." 
    },

    // =================================================
    // 新區塊：聊天機器人 (BotGo)
    // =================================================
    chatbot: {
      greeting: '您好！我是 BotGo 🤖。今天有什麼我可以協助您的嗎？',
      placeholder: '輸入訊息...',
      listening: '正在聆聽...',
      error: '連線錯誤。',
      salesBtn: '詢價',
      voiceCode: 'zh-TW', // Cambiado a Chino Tradicional (Taiwan)
      waStart: '您好 Ortiz 集團，我有興趣詢價'
    },
    
    // /products 頁面的主要輪播列表
    products_list: [
      { 
        img: "img1.png", 
        division: "纏繞膜", // STRETCH FILM
        descripcion: "製造用於農業包裝的工業網袋。",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "繩索", // CUERDAS
        descripcion: "工業用高強度繩索和纜繩。",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "拉菲草", // RAFIA
        descripcion: "用於包裝和裝載的拉菲草解決方案。",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "拉菲草", // RAFIA
        descripcion: "客製化軟包裝。",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "編織袋", // SACOS
        descripcion: "工業技術紡織品。",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "護角", // ESQUINEROS
        descripcion: "客製化開發。",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- 繩索頁面特定數據 ---
    cuerdas: {
      meta_title: "繩索 | Ortiz 集團",
      back_aria: "返回",
      loading: "載入中...",
      specs_title: "技術規格",
      
      specs_labels: {
        load: "性能",
        unit: "單位",
        mat: "材質",
        weight: "重量 / 延伸率",
        resist: "耐用性",
        charge: "負載 / 阻力"
      },
  
      products: [
        { 
          name: 'T1 繩索', 
          img: '/images/cuerdas/CuerdaT1.webp', 
          link: '#', 
          description: "使用優質材料製成的多功能耐用繩索。專為承受從輕負載到重型工業作業而設計。其 3 股和 4 股結構提供了完美的平衡。",
          specs_values: { 
            load: "939 m", 
            unit: "1", 
            mat: "PP-V", 
            weight: "21 kg", 
            resist: "390 KG", 
            charge: "優秀" 
          }
        },
        { 
          name: 'UV 6 繩索', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "帶有抗紫外線濾層的聚丙烯纜繩，專為抵抗海洋和田野的高日曬而設計。確保在大型隧道（農業大棚）中的牢固度和長壽命，是漿果、辣椒種植和海洋用途的理想選擇。",
          specs_values: { 
            load: "3,240 m", 
            unit: "1", 
            mat: "PP-UV", 
            weight: "18 kg", 
            resist: "105 kg", 
            charge: "優秀" 
          }
        },
        { 
          name: 'UV 8 繩索', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "帶有抗紫外線濾層的聚丙烯纜繩，專為抵抗海洋和田野的高日曬而設計。確保在大型隧道（農業大棚）中的牢固度和長壽命，是漿果、辣椒種植和海洋用途的理想選擇。",
          specs_values: { 
            load: "2500 kg", 
            unit: "16 mm", 
            mat: "Nylon-X", 
            weight: "1%", 
            resist: "高", 
            charge: "優秀" 
          }
        }
      ]   
    },

    // =================================================
    // 新區塊：經銷商
    // =================================================
    distributor: {
      hero_title: "我想成為經銷商",
      hero_desc: "加入我們的網絡。留下您的資料，我們的商業顧問將聯繫您以確認您所在的區域。",
      
      form_title: "申請資料",
      label_name: "全名 *",
      placeholder_name: "例如：王大明",
      label_company: "公司名稱",
      placeholder_company: "例如：北方貿易公司",
      label_phone: "手機 / WhatsApp *",
      placeholder_phone: "例如：55 1234 5678",
      label_city: "城市與州/省 *",
      placeholder_city: "例如：莫雷利亞，米卻肯州",
      
      label_products: "您對哪些產品感興趣？",
      products_list: [
        "拉菲草",
        "網袋",
        "纏繞膜",
        "繩索",
        "護角",
        "編織袋"
      ],
      
      btn_cancel: "取消",
      btn_submit: "發送資料"
    }
    
};