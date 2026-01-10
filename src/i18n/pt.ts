export const pt = {
    nav: {
      home: 'INÍCIO',
      products: 'PRODUTOS',
      catalog: 'Catálogo',
      promos: 'Promoções',
      about: 'SOBRE NÓS',
      company: 'A Empresa',
      social: 'Impulso Social',
      distributor: 'DISTRIBUIDOR',
      contact: 'CONTATO'
    },
    hero: { title: "Bem-vindos", subtitle: "Qualidade que perdura" },
    common: { 
        seeMore: "Ver mais", 
        buy: "Comprar", 
        redirecting: "Redirecionando..." 
    },

    // =================================================
    // SEÇÃO CHATBOT (BotGo)
    // =================================================
    chatbot: {
      greeting: 'Olá! Sou o BotGo 🤖. Como posso ajudar você hoje?',
      placeholder: 'Digite uma mensagem...',
      listening: 'Ouvindo...',
      error: 'Erro de conexão.',
      salesBtn: 'Cotar',
      voiceCode: 'pt-BR', // Código para voz em Português
      waStart: 'Olá Grupo Ortiz, tenho interesse em uma cotação'
    },
    
    // Lista principal para o carrossel de /produtos
    products_list: [
      { 
        img: "img1.png", 
        division: "STRETCH FILM", 
        descripcion: "Fabricação de sacos de malha industriais para embalagem agrícola.",
        slug: "productos/stretch-film" 
      },
      { 
        img: "img2.png", 
        division: "CORDAS", 
        descripcion: "Cordas e cabos de alta resistência para uso industrial.",
        slug: "cuerdas" 
      },
      { 
        img: "img3.png", 
        division: "RÁFIA", 
        descripcion: "Soluções de ráfia para embalagem e carga.",
        slug: "rafias" 
      },
      { 
        img: "img4.png", 
        division: "RÁFIA", 
        descripcion: "Embalagens flexíveis personalizadas.",
        slug: "productos/rafia-empaques" 
      },
      { 
        img: "img5.png", 
        division: "SACARIA", 
        descripcion: "Têxteis técnicos industriais.",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "CANTONEIRAS", 
        descripcion: "Desenvolvimentos sob medida.",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- DADOS ESPECÍFICOS DA PÁGINA DE CORDAS ---
    cuerdas: {
      meta_title: "Cordas | Grupo Ortiz",
      back_aria: "Voltar",
      loading: "Carregando...",
      specs_title: "ESPECIFICAÇÕES TÉCNICAS",
      
      specs_labels: {
        load: "Rendimento",
        unit: "Unidade",
        mat: "Material",
        weight: "Peso / Alongamento",
        resist: "Resistência",
        charge: "Carga / Resistência"
      },
  
      products: [
        { 
          name: 'CORDA T1', 
          img: '/images/cuerdas/CuerdaT1.webp', 
          link: '#', 
          description: "Corda versátil e durável fabricada com materiais de primeira qualidade. Projetada para suportar desde cargas leves até trabalho pesado industrial. Sua construção de 3 e 4 cabos oferece um equilíbrio perfeito.",
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
          name: 'CORDA UV 6', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Cabo de polipropileno com filtro UV, projetado para resistir à alta exposição solar no mar e no campo. Garante firmeza e longa vida útil em macrotúneis, ideal para cultivos de frutas vermelhas (berries), pimentão e uso marítimo.",
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
          name: 'CORDA UV 8', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Cabo de polipropileno com filtro UV, projetado para resistir à alta exposição solar no mar e no campo. Garante firmeza e longa vida útil em macrotúneis, ideal para cultivos de frutas vermelhas (berries), pimentão e uso marítimo.",
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
    },

    // =================================================
    // SEÇÃO DISTRIBUIDOR
    // =================================================
    distributor: {
      hero_title: "Quero ser Distribuidor",
      hero_desc: "Junte-se à nossa rede. Deixe seus dados e um consultor comercial entrará em contato para validar sua região.",
      
      form_title: "Dados da Solicitação",
      label_name: "Nome Completo *",
      placeholder_name: "Ex. João Silva",
      label_company: "Nome da Empresa",
      placeholder_company: "Ex. Comercializadora Sul",
      label_phone: "Celular / WhatsApp *",
      placeholder_phone: "Ex. 11 91234 5678",
      label_city: "Cidade e Estado *",
      placeholder_city: "Ex. Curitiba, Paraná",
      
      label_products: "Quais produtos lhe interessam?",
      products_list: [
        "Ráfia",
        "Sacos de Malha", // Tradução comum para Arpilla
        "Stretch Film",
        "Cordas",
        "Cantoneiras", // Tradução para Esquinero
        "Sacaria"
      ],
      
      btn_cancel: "CANCELAR",
      btn_submit: "ENVIAR DADOS"
    }
    
};