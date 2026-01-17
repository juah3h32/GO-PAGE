export const pt = {
  nav: {
    home: 'INÍCIO',
    products: 'PRODUTOS',
    catalog: 'Catálogo',
    promos: 'Promoções',
    about: 'SOBRE NÓS',
    company: 'A Empresa',
    social: 'Impacto Social',
    distributor: 'DISTRIBUIDOR',
    contact: 'CONTATO'
  },

  hero: { 
    title: "Bem-vindos", 
    subtitle: "Qualidade que dura" 
  },

  common: { 
    seeMore: "Ver mais", 
    division: "Divisão",
    buy: "Comprar", 
    redirecting: "Redirecionando..." 
  },

  // =================================================
  // NOVA SEÇÃO: CHATBOT (BotGo)
  // =================================================
  chatbot: {
    greeting: 'Olá! Sou o BotGo 🤖. Como posso ajudar você hoje?',
    placeholder: 'Digite uma mensagem...',
    listening: 'Ouvindo...',
    error: 'Erro de conexão.',
    salesBtn: 'Solicitar cotação',
    voiceCode: 'pt-BR',
    waStart: 'Olá Grupo Ortiz, tenho interesse em solicitar uma cotação'
  },

  // Lista principal para o carrossel de /produtos
  products_list: [
    { 
      img: "img1.png", 
      division: "STRETCH FILM", 
      descripcion: "Filme stretch de alta transparência e elevados padrões de qualidade. Garante a integridade da carga e eficiência de custos. Nossa linha inclui uma opção biodegradável, formulada para se degradar 90% mais rápido sem comprometer as propriedades mecânicas, unindo resistência industrial e responsabilidade ambiental.",
      slug: "productos/stretch-film" 
    },
    { 
      img: "img2.png", 
      division: "CORDAS", 
      descripcion: "Corda de filamentos de polipropileno (PP) de alto desempenho. Graças à sua fabricação híbrida com materiais de alta e baixa densidade, alcança o equilíbrio perfeito: extrema leveza sem comprometer a resistência à ruptura. Uma solução flexível e durável para trabalhos exigentes.",
      slug: "cuerdas" 
    },
    { 
      img: "img3.png", 
      division: "RÁFIA", 
      descripcion: "Ráfia de filme de polipropileno (PP) de alto desempenho. Produzida com materiais de alta e baixa densidade, garante leveza e alta resistência à tração. Um produto flexível e versátil, projetado para máximo desempenho na amarração.",
      slug: "rafias" 
    },
    { 
      img: "img4.png", 
      division: "JUTA", 
      descripcion: "Sacos de juta em ráfia de polipropileno com tecido plano e costura reforçada em formato 'L'. A incorporação de monofilamento proporciona maior resistência e facilidade no manuseio e transporte. Seu design ventilado preserva a frescura dos produtos, ideal para frutas e vegetais.",
      slug: "productos/rafia-empaques" 
    },
    { 
      img: "img5.png", 
      division: "SACOS", 
      descripcion: "Sacos de ráfia de qualidade premium, produzidos com tecnologia de ponta e matéria-prima selecionada. Oferecem uma solução de embalagem robusta e confiável para diversos setores, desde alimentos até produtos químicos e fertilizantes.",
      slug: "productos/sacos" 
    },
    { 
      img: "img6.png", 
      division: "PROTETORES DE CANTO", 
      descripcion: "Protetores de canto em papelão projetados para otimizar a logística. Proporcionam resistência estrutural e melhoram a estabilidade da carga, permitindo tensão adequada do filme para transporte seguro.",
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
      load: "Desempenho",
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
        description: "Corda versátil e durável fabricada com materiais de alta qualidade. Projetada para suportar desde cargas leves até trabalhos industriais pesados. Sua construção de 3 e 4 cabos oferece um equilíbrio perfeito.",
        specs_values: { 
          load: "939 m", 
          unit: "1", 
          mat: "PP-V", 
          weight: "21 kg", 
          resist: "390 kg", 
          charge: "Excelente" 
        }
      },
      { 
        name: 'CORDA UV 6', 
        img: '/images/cuerdas/CuerdaNegra.webp', 
        link: '#',
        description: "Corda de polipropileno com filtro UV, desenvolvida para resistir à alta exposição solar em ambientes marítimos e agrícolas. Garante firmeza e longa vida útil em macrotúneis, ideal para cultivos de berries, pimentão e uso marítimo.",
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
        name: 'CORDA UV 8', 
        img: '/images/cuerdas/CuerdaNegra.webp', 
        link: '#',
        description: "Corda de polipropileno com proteção UV, projetada para uso intensivo em ambientes externos e agrícolas.",
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
  // NOVA SEÇÃO: DISTRIBUIDOR
  // =================================================
  distributor: {
    hero_title: "Quero Ser Distribuidor",
    hero_desc: "Faça parte da nossa rede. Deixe seus dados e um consultor comercial entrará em contato para validar sua região.",

    form_title: "Dados da Solicitação",
    label_name: "Nome Completo *",
    placeholder_name: "Ex.: João Silva",
    label_company: "Nome da Empresa",
    placeholder_company: "Ex.: Comercial Norte",
    label_phone: "Celular / WhatsApp *",
    placeholder_phone: "Ex.: 55 1234 5678",
    label_city: "Cidade e Estado *",
    placeholder_city: "Ex.: Morelia, Michoacán",

    label_products: "Quais produtos lhe interessam?",
    products_list: [
      "Ráfia",
      "Juta",
      "Stretch Film",
      "Corda",
      "Protetores de Canto",
      "Sacos"
    ],

    btn_cancel: "CANCELAR",
    btn_submit: "ENVIAR DADOS"
  }
};
