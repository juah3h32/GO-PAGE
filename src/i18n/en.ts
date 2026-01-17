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

  hero: { 
    title: "Welcome", 
    subtitle: "Quality That Lasts" 
  },

  common: { 
    seeMore: "See more", 
    division: "Division",
    buy: "Buy", 
    redirecting: "Redirecting..." 
  },

  // =================================================
  // NEW SECTION: CHATBOT (BotGo)
  // =================================================
  chatbot: {
    greeting: 'Hello! I’m BotGo 🤖. How can I help you today?',
    placeholder: 'Type a message...',
    listening: 'Listening...',
    error: 'Connection error.',
    salesBtn: 'Get a Quote',
    voiceCode: 'en-US',
    waStart: 'Hello Grupo Ortiz, I am interested in getting a quote'
  },

  // Main list for /products carousel
  products_list: [
    { 
      img: "img1.png", 
      division: "STRETCH FILM", 
      descripcion: "Crystal-clear stretch film with high quality standards. Ensures load integrity and cost efficiency. Our product line includes a biodegradable option, formulated to degrade 90% faster without sacrificing mechanical properties, combining industrial strength with environmental responsibility.",
      slug: "productos/stretch-film" 
    },
    { 
      img: "img2.png", 
      division: "ROPES", 
      descripcion: "High-performance polypropylene (PP) filament rope. Thanks to its hybrid manufacturing process using high- and low-density materials, it achieves the perfect balance: extreme lightness without compromising breaking strength. A flexible and durable solution designed for demanding tasks.",
      slug: "cuerdas" 
    },
    { 
      img: "img3.png", 
      division: "RAFIA", 
      descripcion: "High-performance polypropylene (PP) film raffia. Manufactured with high- and low-density materials to ensure an ideal balance of light weight and high tensile strength. A flexible and versatile product designed for maximum tying performance.",
      slug: "rafias" 
    },
    { 
      img: "img4.png", 
      division: "BURLAP", 
      descripcion: "Polypropylene raffia burlap bags with flat weave and reinforced ‘L’ stitching. The addition of monofilament provides superior strength and easier handling and transport. Its high-quality ventilated design preserves freshness, ideal for fruits and vegetables.",
      slug: "productos/rafia-empaques" 
    },
    { 
      img: "img5.png", 
      division: "BAGS", 
      descripcion: "Premium-quality raffia bags produced with cutting-edge technology and selected raw materials. They provide a strong and reliable packaging solution for a wide range of industries, from food products (flour, sugar) to chemicals and fertilizers.",
      slug: "productos/sacos" 
    },
    { 
      img: "img6.png", 
      division: "CORNER PROTECTORS", 
      descripcion: "Cardboard corner protectors designed to optimize logistics operations. They provide structural strength and improve load stability, allowing proper film tension for safe and uniform transport.",
      slug: "productos/esquineros" 
    }
  ],

  // --- SPECIFIC DATA FOR ROPES PAGE ---
  cuerdas: {
    meta_title: "Ropes | Grupo Ortiz",
    back_aria: "Back",
    loading: "Loading...",
    specs_title: "TECHNICAL SPECIFICATIONS",

    specs_labels: {
      load: "Performance",
      unit: "Unit",
      mat: "Material",
      weight: "Weight / Elongation",
      resist: "Strength",
      charge: "Load / Resistance"
    },

    products: [
      { 
        name: 'ROPE T1', 
        img: '/images/cuerdas/CuerdaT1.webp', 
        link: '#', 
        description: "Versatile and durable rope made from premium-quality materials. Designed to handle everything from light loads to heavy industrial work. Its 3- and 4-strand construction offers a perfect balance.",
        specs_values: { 
          load: "939 m", 
          unit: "1", 
          mat: "PP-V", 
          weight: "21 kg", 
          resist: "390 kg", 
          charge: "Excellent" 
        }
      },
      { 
        name: 'ROPE UV 6', 
        img: '/images/cuerdas/CuerdaNegra.webp', 
        link: '#',
        description: "Polypropylene rope with UV filter, designed to withstand high sun exposure in marine and agricultural environments. Ensures firmness and long service life in macrotunnels, ideal for berries, peppers, and marine use.",
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
        name: 'ROPE UV 8', 
        img: '/images/cuerdas/CuerdaNegra.webp', 
        link: '#',
        description: "Polypropylene rope with UV protection, designed for intensive outdoor and agricultural use.",
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
  },

  // =================================================
  // NEW SECTION: DISTRIBUTOR
  // =================================================
  distributor: {
    hero_title: "I Want to Be a Distributor",
    hero_desc: "Join our network. Leave your details and a sales advisor will contact you to validate your territory.",

    form_title: "Application Details",
    label_name: "Full Name *",
    placeholder_name: "e.g. John Doe",
    label_company: "Company Name",
    placeholder_company: "e.g. North Trading Co.",
    label_phone: "Mobile / WhatsApp *",
    placeholder_phone: "e.g. 55 1234 5678",
    label_city: "City and State *",
    placeholder_city: "e.g. Morelia, Michoacán",

    label_products: "Which products are you interested in?",
    products_list: [
      "Raffia",
      "Burlap",
      "Stretch Film",
      "Rope",
      "Corner Protectors",
      "Bags"
    ],

    btn_cancel: "CANCEL",
    btn_submit: "SUBMIT"
  }
};
