document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     DATA
  ========================= */
  const productsData = [
    {
      key: "STRETCH FILM",
      description: "Película industrial para embalaje, estabilidad y protección de carga.",
      background: "linear-gradient(135deg, #1f4037, #99f2c8)",
      specs: [
        { label: "Espesor", value: "23 micras" },
        { label: "Ancho", value: "50 cm" },
        { label: "Material", value: "Polietileno" },
        { label: "Uso", value: "Industrial" }
      ]
    },
    {
      key: "CUERDAS",
      description: "Cuerdas y cabos de alta resistencia para uso industrial continuo.",
      background: "linear-gradient(135deg, #232526, #414345)",
      specs: [
        { label: "Diámetro", value: "12 mm" },
        { label: "Material", value: "Polipropileno" },
        { label: "Resistencia", value: "Alta" },
        { label: "Uso", value: "Industrial" }
      ]
    },
    {
      key: "RAFIA",
      description: "Rafia industrial para empaque, sujeción y carga.",
      background: "linear-gradient(135deg, #283048, #859398)",
      specs: [
        { label: "Formato", value: "Rollo" },
        { label: "Color", value: "Blanco" },
        { label: "Industria", value: "Logística" },
        { label: "Uso", value: "Embalaje" }
      ]
    }
  ];

  /* =========================
     ELEMENTOS DOM
  ========================= */
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  const backButton = document.getElementById("back"); 

  const carousel = document.querySelector(".carousel");
  const listHTML = document.querySelector(".carousel .list");
  const productosPage = document.querySelector(".productos-page");
  const containerPage = productosPage || document.body; 
  const main = document.querySelector("main");

  const seeMoreButtons = document.querySelectorAll(".seeMore");

  let unAcceptClick;

  /* =========================
     SLIDER (MOTOR PRINCIPAL)
  ========================= */
  if(nextButton) nextButton.onclick = () => showSlider("next");
  if(prevButton) prevButton.onclick = () => showSlider("prev");

  function showSlider(type) {
    if(nextButton) nextButton.style.pointerEvents = "none";
    if(prevButton) prevButton.style.pointerEvents = "none";

    carousel.classList.remove("next", "prev");
    const items = document.querySelectorAll(".carousel .list .item");

    if (type === "next") {
      listHTML.appendChild(items[0]);
      carousel.classList.add("next");
    } else {
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add("prev");
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
      if(nextButton) nextButton.style.pointerEvents = "auto";
      if(prevButton) prevButton.style.pointerEvents = "auto";
      applyActiveProduct();
    }, 500); 
  }

  /* =========================
     PRODUCTO ACTIVO & FONDO
  ========================= */
  function applyActiveProduct() {
    const activeItem = document.querySelector(".carousel .list .item:nth-child(2)");
    if (!activeItem) return;

    const topicElement = activeItem.querySelector(".topic");
    if (!topicElement) return; 
    
    const productName = topicElement.innerText.trim();
    const product = productsData.find(p => p.key === productName);
    
    if (product) {
      if(main) main.style.background = product.background;
      
      const detailTitle = activeItem.querySelector(".detail .title");
      const detailDes = activeItem.querySelector(".detail .des");
      const specsBox = activeItem.querySelector(".specifications");

      if(detailTitle) detailTitle.innerText = product.key;
      if(detailDes) detailDes.innerText = product.description;

      if(specsBox) {
        specsBox.innerHTML = "";
        product.specs.forEach(spec => {
          const div = document.createElement("div");
          div.innerHTML = `<p style="font-weight:bold">${spec.value}</p><p style="font-size:0.8em">${spec.label}</p>`;
          specsBox.appendChild(div);
        });
      }
    }
  }

  /* =========================
     VER MÁS / DETALLES
  ========================= */
  seeMoreButtons.forEach(button => {
    button.onclick = (e) => {
      e.stopPropagation(); 
      carousel.classList.remove("next", "prev");
      applyActiveProduct();
      carousel.classList.add("showDetail");
      containerPage.classList.remove("dark");
    };
  });

  if(backButton) {
    backButton.onclick = () => {
      carousel.classList.remove("showDetail");
      containerPage.classList.add("dark");
    };
  }

  /* =========================================
     MOUSE DRAG (ARRASTRE CON MOUSE MEJORADO)
  ========================================= */
  let isDragging = false;
  let startX = 0;
  const DRAG_THRESHOLD = 50; 

  carousel.addEventListener("mousedown", (e) => {
    if (carousel.classList.contains("showDetail") || e.target.closest('button')) return;

    isDragging = true;
    startX = e.clientX;
    carousel.classList.add("dragging");
    e.preventDefault(); 
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault(); 
  });

  window.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    carousel.classList.remove("dragging");

    const endX = e.clientX;
    const diff = endX - startX;

    if (Math.abs(diff) > DRAG_THRESHOLD) {
      if (diff > 0) {
        showSlider("prev");
      } else {
        showSlider("next");
      }
    }
  });

  /* =========================
     TOUCH SWIPE (Móvil)
  ========================= */
  let touchStartX = 0;
  let touchEndX = 0;
  const SWIPE_THRESHOLD = 50; 

  carousel.addEventListener('touchstart', (e) => {
      if (carousel.classList.contains("showDetail")) return;
      touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
      if (carousel.classList.contains("showDetail")) return;
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
  }, { passive: true });

  function handleGesture() {
      if (touchEndX < touchStartX - SWIPE_THRESHOLD) {
          showSlider('next');
      }
      if (touchEndX > touchStartX + SWIPE_THRESHOLD) {
          showSlider('prev');
      }
  }

  // Inicializar estado
  applyActiveProduct();

  /* =========================
     AÑADIR ESPERA PARA TRANSICIÓN ANTES DE CARGAR NUEVA PÁGINA
  ========================= */
  seeMoreButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const link = button.getAttribute('href');
      
      // Inicia la animación
      carousel.classList.add('transition-active');
      
      try {
        // Esperar la animación de transición
        await new Promise(resolve => setTimeout(resolve, 1350)); // tiempo de la animación

        // Pre-cargar la página
        const pageFetch = fetch(link);
        await pageFetch;

        // Cambiar de página después de la animación
        window.location.href = link;
      } catch (error) {
        console.error("Error al precargar la página:", error);
        setTimeout(() => {
          window.location.href = link;
        }, 1350);
      }
    });
  });

});