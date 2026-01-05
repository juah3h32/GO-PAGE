export const pt = {
    nav: {
      home: 'INÍCIO',
      products: 'PRODUTOS',
      catalog: 'Catálogo',
      promos: 'Promoções',
      about: 'NÓS',
      company: 'A Empresa',
      social: 'Impulso Social',
      distributor: 'DISTRIBUIDOR',
      contact: 'CONTATO'
    },
    hero: { title: "Bem-vindo", subtitle: "Qualidade que perdura" },
    common: { 
        seeMore: "Ver mais", 
        buy: "Comprar", 
        redirecting: "Redirecionando..." 
      },
    products_list: [
      { 
        img: "img1.png", 
        division: "FILME STRETCH", 
        descripcion: "Fabricação de sacos de malha industrial para embalagens agrícolas.",
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
        division: "CANTONEIRAS", 
        descripcion: "Desenvolvimentos sob medida.",
        slug: "productos/esquineros" 
      }
    ],
  
    // --- NOVA SEÇÃO: DADOS ESPECÍFICOS DA PÁGINA DE CORDAS ---
    cuerdas: {
      meta_title: "Cordas | Grupo Ortiz",
      back_aria: "Voltar",
      loading: "Carregando...",
      specs_title: "ESPECIFICAÇÕES TÉCNICAS",
      
      // Rótulos da tabela
      specs_labels: {
        load: "Rendimento",
        unit: "Unidade",
        mat: "Material",
        weight: "Peso / Alongamento",
        resist: "Resistência",
        charge: "Carga / Resistência"
      },
  
      // Array de produtos traduzidos
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
          name: 'CORDA UV', 
          img: '/images/cuerdas/CuerdaNegra.webp', 
          link: '#',
          description: "Cabo de polipropileno com filtro UV, projetado para resistir à alta exposição solar no mar e no campo. Garante firmeza e longa vida útil em macrotúneis, ideal para cultivos de frutas vermelhas (berries), pimentão e uso marítimo.",
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
          // ID 2 (Modelo 3D)
          name: 'CORDA ECO', 
          img: '/images/img3.png', 
          link: '#',
          description: "Corda de polipropileno em múltiplos calibres, cores e apresentações, com ou sem reforço. Solução versátil para uso geral em indústrias, armazéns, ferragens, oficinas, usinagem e mercados de abastecimento.",
          specs_values: { 
            load: "1200 kg", 
            unit: "10 mm", 
            mat: "Eco-Fib", 
            weight: "6%", 
            resist: "Média", 
            charge: "Moderada" 
          }
        },
        { 
           // ID 3
          name: 'ARPILLA (REDE)', 
          img: '/images/img5.png', 
          link: '#',
          description: "Máxima carga de ruptura para garantir a segurança dos seus produtos durante o transporte e armazenamento.",
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