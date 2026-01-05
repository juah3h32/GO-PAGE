export const zh = {
    nav: {
      home: '首页',
      products: '产品',
      catalog: '目录',
      promos: '促销',
      about: '关于我们',
      company: '公司简介',
      social: '社会公益',
      distributor: '分销商',
      contact: '联系我们'
    },
    hero: { title: "欢迎", subtitle: "持久的品质" },
    common: { 
        seeMore: "查看更多", 
        buy: "购买",             // Comprar
        redirecting: "正在跳转..." // Redirigiendo...
      },
    products_list: [
      { 
        img: "img1.png", 
        division: "拉伸膜", 
        descripcion: "制造用于农业包装的工业网袋。",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "绳索", 
        descripcion: "用于工业用途的高强度绳索和缆绳。",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "拉菲草", 
        descripcion: "用于包装和装载的拉菲草解决方案。",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "拉菲草", 
        descripcion: "定制柔性包装。",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "袋子", 
        descripcion: "工业技术纺织品。",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "护角", 
        descripcion: "定制开发。",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- 新增部分：绳索页面特定数据 (CUERDAS) ---
    cuerdas: {
      meta_title: "绳索 | Grupo Ortiz",
      back_aria: "返回",
      loading: "加载中...",
      specs_title: "技术规格",
      
      // 表格标签
      specs_labels: {
        load: "性能 / 产量",   // Rendimiento
        unit: "单位",          // Unidad
        mat: "材质",           // Material
        weight: "重量 / 延伸率", // Peso / Elongación
        resist: "耐受性",       // Resistencia
        charge: "承重 / 强度"    // Carga / Resistencia
      },
  
      // 翻译后的产品数组
      products: [
        { 
          // ID 0
          name: 'T1 绳索', 
          img: '/images/cuerdas/CuerdaT1.webp', 
          link: '#', 
          description: "多功能且耐用的绳索，采用优质材料制造。专为承受从轻载到重型工业工作而设计。其 3 股和 4 股结构提供了完美的平衡。",
          specs_values: { 
            load: "939 m", 
            unit: "1", 
            mat: "PP-V", 
            weight: "21 kg", 
            resist: "390 KG", 
            charge: "优秀" 
          }
        },
        { 
          // ID 1
          name: 'UV 绳索', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "带紫外线过滤器的聚丙烯缆绳，专为抵抗海洋和田野中的高强度日晒而设计。保证在大型隧道中的牢固性和长使用寿命，是浆果、辣椒作物和海事用途的理想选择。",
          specs_values: { 
            load: "3,240 m", 
            unit: "1", 
            mat: "PP-UV", 
            weight: "18 kg", 
            resist: "105 kg", 
            charge: "优秀" 
          }
        },
        { 
          // ID 2 (3D 模型)
          name: 'ECO 绳索', 
          img: '/images/img3.png', 
          link: '#',
          description: "多种规格、颜色和包装的聚丙烯绳索，带或不带加固。适用于工业、仓库、五金店、车间、机械加工和批发市场的通用多功能解决方案。",
          specs_values: { 
            load: "1200 kg", 
            unit: "10 mm", 
            mat: "Eco-Fib", 
            weight: "6%", 
            resist: "中等", 
            charge: "适中" 
          }
        },
        { 
           // ID 3
          name: '网袋 (ARPILLA)', 
          img: '/images/img5.png', 
          link: '#',
          description: "最大断裂载荷，确保您的产品在运输和储存过程中的安全。",
          specs_values: { 
            load: "2500 kg", 
            unit: "16 mm", 
            mat: "Nylon-X", 
            weight: "1%", 
            resist: "高", 
            charge: "优秀" 
          }
        }
      ]
    }
  };