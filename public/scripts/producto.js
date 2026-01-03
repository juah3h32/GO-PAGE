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
     ELEMENTOS
  ========================= */
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  const backButton = document.getElementById("back");

  const carousel = document.querySelector(".carousel");
  const listHTML = document.querySelector(".carousel .list");
  const productosPage = document.querySelector(".productos-page");
  const main = document.querySelector("main");

  const seeMoreButtons = document.querySelectorAll(".seeMore");

  let unAcceptClick;

  /* =========================
     SLIDER
  ========================= */
  nextButton.onclick = () => showSlider("next");
  prevButton.onclick = () => showSlider("prev");

  function showSlider(type) {
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";

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
      nextButton.style.pointerEvents = "auto";
      prevButton.style.pointerEvents = "auto";
      applyActiveProduct();
    }, 300);
  }

  /* =========================
     PRODUCTO ACTIVO (CLAVE)
  ========================= */
  function applyActiveProduct() {
    const activeItem = document.querySelector(
      ".carousel .list .item:nth-child(2)"
    );
    if (!activeItem) return;

    const productName = activeItem.querySelector(".topic")?.innerText.trim();
    const product = productsData.find(p => p.key === productName);
    if (!product) return;

    // Fondo dinámico
    main.style.background = product.background;

    // Texto
    activeItem.querySelector(".detail .title").innerText = product.key;
    activeItem.querySelector(".detail .des").innerText = product.description;

    // Specs
    const specsBox = activeItem.querySelector(".specifications");
    specsBox.innerHTML = "";

    product.specs.forEach(spec => {
      const div = document.createElement("div");
      div.innerHTML = `<p>${spec.value}</p><p>${spec.label}</p>`;
      specsBox.appendChild(div);
    });
  }

  /* =========================
     VER MÁS
  ========================= */
  seeMoreButtons.forEach(button => {
    button.onclick = () => {
      carousel.classList.remove("next", "prev");
      applyActiveProduct();
      carousel.classList.add("showDetail");
      productosPage.classList.remove("dark");
    };
  });

  /* =========================
     BACK
  ========================= */
  backButton.onclick = () => {
    carousel.classList.remove("showDetail");
    productosPage.classList.add("dark");
  };

  /* =========================
     DRAG MANUAL
  ========================= */
  let isDragging = false;
  let startX = 0;
  let deltaX = 0;
  const DRAG_THRESHOLD = 90;

  listHTML.addEventListener("mousedown", (e) => {
    if (carousel.classList.contains("showDetail")) return;

    isDragging = true;
    startX = e.clientX;
    deltaX = 0;
    carousel.classList.add("dragging");
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    deltaX = e.clientX - startX;
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;

    isDragging = false;
    carousel.classList.remove("dragging");

    if (Math.abs(deltaX) < DRAG_THRESHOLD) return;

    deltaX > 0 ? showSlider("prev") : showSlider("next");
  });

  // Inicial
  applyActiveProduct();
});
