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
    // NOVA SEÇÃO: CHATBOT (BotGo) - PORTUGUÊS
    // =================================================
    chatbot: {
      greeting: 'Olá! Eu sou o BotGo 🤖. Como posso ajudar você hoje?',
      placeholder: 'Digite uma mensagem...',
      listening: 'Ouvindo...',
      error: 'Erro de conexão.',
      salesBtn: 'Solicitar Cotação',
      voiceCode: 'pt-BR', // Código para voz em Português do Brasil
      waStart: 'Olá Grupo Ortiz, estou interessado em cotar'
    },

    // Lista principal para o carrossel de /produtos
    products_list: [
      { 
        img: "img1.png", 
        division: "FILME STRETCH", 
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
        division: "SACOS", 
        descripcion: "Têxteis técnicos industriais.",
        slug: "productos/sacos" 
      },
      { 
        img: "img6.png", 
        division: "CANTONEIRAS", // Esquineros em PT
        descripcion: "Desenvolvimentos sob medida.",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- DADOS ESPECÍFICOS DA PÁGINA DE CORDAS (Cuerdas) ---
    cuerdas: {
      meta_title: "Cordas | Grupo Ortiz",
      back_aria: "Voltar",
      loading: "Carregando...",
      specs_title: "ESPECIFICAÇÕES TÉCNICAS",
      
      // Etiquetas fixas da tabela
      specs_labels: {
        load: "Rendimento",
        unit: "Unidade",
        mat: "Material",
        weight: "Peso / Alongamento",
        resist: "Resistência",
        charge: "Carga / Resistência"
      },
  
      // Array de produtos
      products: [
        { 
          // ID 0
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
          // ID 1
          name: 'CORDA UV 6', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Cabo de polipropileno com filtro UV, projetado para resistir à alta exposição solar no mar e no campo. Garante firmeza e longa vida útil em macrotúneis, ideal para cultivos de berries, pimentão e uso marítimo.",
          specs_values: { 
            load: "3.240 m", 
            unit: "1", 
            mat: "PP-UV", 
            weight: "18 kg", 
            resist: "105 kg", 
            charge: "Excelente" 
          }
        },
        { 
           // ID 2
          name: 'CORDA UV 8', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Cabo de polipropileno com filtro UV, projetado para resistir à alta exposição solar no mar e no campo. Garante firmeza e longa vida útil em macrotúneis, ideal para cultivos de berries, pimentão e uso marítimo.",
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
    }
};