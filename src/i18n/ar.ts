export const ar = {
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      catalog: 'الكتالوج',
      promos: 'العروض',
      about: 'من نحن',
      company: 'الشركة',
      social: 'التأثير الاجتماعي',
      distributor: 'الموزع',
      contact: 'اتصل بنا'
    },
    hero: { 
      title: "أهلاً بكم", 
      subtitle: "جودة تدوم" 
    },
    common: { 
        seeMore: "عرض المزيد", 
        buy: "شراء", 
        redirecting: "جاري إعادة التوجيه..." 
    },

    // =================================================
    // NEW SECTION: CHATBOT (BotGo) - ARABIC
    // =================================================
    chatbot: {
      greeting: 'مرحباً! أنا BotGo 🤖. كيف يمكنني مساعدتك اليوم؟',
      placeholder: 'اكتب رسالة...',
      listening: 'جاري الاستماع...',
      error: 'خطأ في الاتصال.',
      salesBtn: 'طلب عرض سعر',
      voiceCode: 'ar-SA', // Código para voz en Árabe (Saudi Arabia)
      waStart: 'مرحباً Grupo Ortiz، أنا مهتم بطلب سعر لـ'
    },

    // Lista principal para el carrusel de /productos
    products_list: [
      { 
        img: "img1.png", 
        division: "فيلم استرتش", // Stretch Film
        descripcion: "تصنيع أكياس شبكية صناعية للتغليف الزراعي.",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "حبال", // Cuerdas
        descripcion: "حبال وكابلات عالية المقاومة للاستخدام الصناعي.",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "رافيا", // Rafia
        descripcion: "حلول الرافيا للتعبئة والشحن.",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "رافيا", 
        descripcion: "تغليف مرن مخصص حسب الطلب.",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "أكياس", // Sacos
        descripcion: "منسوجات تقنية صناعية.",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "زوايا الحماية", // Esquineros
        descripcion: "تطويرات حسب المقاس.",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- DATOS ESPECÍFICOS DE LA PÁGINA DE CUERDAS ---
    cuerdas: {
      meta_title: "حبال | Grupo Ortiz",
      back_aria: "رجوع",
      loading: "جاري التحميل...",
      specs_title: "المواصفات الفنية",
      
      // Etiquetas fijas de la tabla
      specs_labels: {
        load: "الأداء",       // Rendimiento
        unit: "الوحدة",       // Unidad
        mat: "المادة",        // Material
        weight: "الوزن / الاستطالة", // Peso / Elongación
        resist: "المقاومة",    // Resistencia
        charge: "الحمل / المقاومة" // Carga / Resistencia
      },
  
      // Array de productos
      products: [
        { 
          // ID 0 - Cuerda T1
          name: 'حبل T1', 
          img: '/images/cuerdas/CuerdaT1.webp', 
          link: '#', 
          description: "حبل متعدد الاستخدامات ومتين مصنوع من مواد عالية الجودة. مصمم لتحمل الأحمال الخفيفة إلى الأعمال الصناعية الشاقة. يوفر بناؤه من 3 و 4 جدائل توازناً مثالياً.",
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
          // ID 1 - Cuerda UV 6
          name: 'حبل UV 6', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "كابل بولي بروبيلين مع فلتر للأشعة فوق البنفسجية، مصمم لمقاومة التعرض العالي للشمس في البحر والحقول. يضمن المتانة والعمر الطويل في الأنفاق الزراعية، مثالي لمحاصيل التوت والفلفل والاستخدام البحري.",
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
           // ID 2 - Cuerda UV 8
          name: 'حبل UV 8', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "كابل بولي بروبيلين مع فلتر للأشعة فوق البنفسجية، مصمم لمقاومة التعرض العالي للشمس في البحر والحقول. يضمن المتانة والعمر الطويل في الأنفاق الزراعية، مثالي لمحاصيل التوت والفلفل والاستخدام البحري.",
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