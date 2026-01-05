export const ar = {
    nav: {
      home: 'الرئيسية',
      products: 'منتجات',
      catalog: 'فهرس',
      promos: 'عروض',
      about: 'معلومات عنا',
      company: 'الشركة',
      social: 'الدافع الاجتماعي',
      distributor: 'موزع',
      contact: 'اتصل بنا'
    },
    hero: { title: "أهلا بك", subtitle: "جودة تدوم" },
    common: { 
        seeMore: "شاهد المزيد", 
        buy: "شراء", 
        redirecting: "جاري التوجيه..." 
      },
    products_list: [
      { 
        img: "img1.png", 
        division: "فيلم استرتش", 
        descripcion: "تصنيع أكياس شبكية صناعية للتغليف الزراعي.",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "حبال", 
        descripcion: "حبال وكابلات عالية المقاومة للاستخدام الصناعي.",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "رافيا", 
        descripcion: "حلول الرافيا للتعبئة والتحميل.",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "رافيا", 
        descripcion: "تغليف مرن مخصص.",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "أكياس", 
        descripcion: "المنسوجات التقنية الصناعية.",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "زوايا", 
        descripcion: "تطورات مخصصة.",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- قسم الحبال (DATOS ESPECÍFICOS DE CUERDAS) ---
    cuerdas: {
      meta_title: "حبال | مجموعة أورتيز",
      back_aria: "عودة",
      loading: "جار التحميل...",
      specs_title: "المواصفات الفنية",
      
      // etiquetas de la tabla
      specs_labels: {
        load: "الأداء", // Rendimiento
        unit: "الوحدة", // Unidad
        mat: "المادة", // Material
        weight: "الوزن / الاستطالة", // Peso / Elongación
        resist: "المقاومة", // Resistencia
        charge: "الحمولة / المتانة" // Carga / Resistencia
      },
  
      // Array de productos traducidos
      products: [
        { 
          // ID 0
          name: 'حبل T1', 
          img: '/images/cuerdas/CuerdaT1.webp', 
          link: '#', 
          description: "حبل متعدد الاستخدامات ومتين مصنوع من مواد عالية الجودة. مصمم لتحمل الأحمال من الخفيفة إلى الأعمال الصناعية الشاقة. يوفر توازناً مثالياً بفضل تصميمه المكون من 3 و 4 جدائل.",
          specs_values: { 
            load: "939 م", 
            unit: "1", 
            mat: "PP-V", 
            weight: "21 كجم", 
            resist: "390 كجم", 
            charge: "ممتاز" 
          }
        },
        { 
          // ID 1
          name: 'حبل UV', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "كابل بولي بروبيلين مع فلتر للأشعة فوق البنفسجية، مصمم لمقاومة التعرض العالي للشمس في البحر والحقول. يضمن المتانة والعمر الطويل في الأنفاق الزراعية، وهو مثالي لمحاصيل التوت والفلفل والاستخدام البحري.",
          specs_values: { 
            load: "3,240 م", 
            unit: "1", 
            mat: "PP-UV", 
            weight: "18 كجم", 
            resist: "105 كجم", 
            charge: "ممتاز" 
          }
        },
        { 
          // ID 2 (Modelo 3D)
          name: 'حبل ECO', 
          img: '/images/img3.png', 
          link: '#',
          description: "حبل بولي بروبيلين بمقاسات وألوان وأشكال متعددة، مع أو بدون تدعيم. حل متعدد الاستخدامات للأغراض العامة في المصانع والمستودعات ومتاجر الأجهزة والورش والأسواق.",
          specs_values: { 
            load: "1200 كجم", 
            unit: "10 مم", 
            mat: "Eco-Fib", 
            weight: "6%", 
            resist: "متوسطة", 
            charge: "معتدلة" 
          }
        },
        { 
           // ID 3
          name: 'أربيلا', // Arpilla
          img: '/images/img5.png', 
          link: '#',
          description: "أقصى حمل للكسر لتأمين منتجاتك أثناء النقل والتخزين.",
          specs_values: { 
            load: "2500 كجم", 
            unit: "16 مم", 
            mat: "Nylon-X", 
            weight: "1%", 
            resist: "عالية", 
            charge: "ممتاز" 
          }
        }
      ]
    }
  };