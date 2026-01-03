// 1. SELECTORES DE LA INTERFAZ (UI)
const thumbs = document.querySelectorAll(".thumb-item");
const productImages = document.querySelectorAll(".wheel-item");
const mainContainer = document.querySelector(".main-container");
const title = document.getElementById("product-title");
const desc = document.getElementById("product-desc");
const textArea = document.querySelector(".text-area");
const rafiaModel = document.getElementById("rafia-3d");

// ESPECIFICACIONES TÉCNICAS
const specLoad = document.getElementById("spec-load");
const specDiam = document.getElementById("spec-diam");
const specMat = document.getElementById("spec-mat");
const specElong = document.getElementById("spec-elong");
const specGrip = document.getElementById("spec-grip");
const specLoadResist = document.getElementById("spec-loadresist");

// (NOTA: Se eliminaron todas las definiciones de Audio, isGlobalMuted y audioControl de aquí
// porque ahora viven en AudioVisualizer.astro)

// 2. DATOS DE PRODUCTOS
const productData = [
  {
    name: "CUERDA T1",
    description: "Cuerda versátil y duradera fabricada con materiales de primera calidad. Diseñada para soportar desde cargas ligeras hasta trabajo pesado industrial. Su construcción de 3 y 4 cabos ofrece un equilibrio perfecto",
    specs: { load: "939 m", diam: "1", mat: "PP-V", elong: "21 kg", grip: "390 KG", loadResist: "Excelente" },
    bg: "var(--bg-cuerda)"
  },
  {
    name: "CUERDA NEGRA UV",
    description: "Cable de polipropileno con filtro UV, diseñado para resistir alta exposición solar en mar y campo. Garantiza firmeza y larga vida útil en macrotúneles, ideal para cultivos de berries, pimiento y uso marítimo.",
    specs: { load: "3,240 m", diam: "1", mat: "PP-UV", elong: "18 kg", grip: "105 kg", loadResist: "Excelente" },
    bg: "var(--bg-strech)"
  },
  {
    name: "CUERDA ECO",
    description: "Cuerda de polipropileno en múltiples calibres, colores y presentaciones, con o sin refuerzo. Solución versátil para uso general en industrias, bodegas, ferreterías, talleres, maquinados y mercado de abastos.",
    specs: { load: "1200 kg", diam: "10 mm", mat: "Eco-Fib", elong: "6%", grip: "Media", loadResist: "Moderada" },
    bg: "var(--bg-rafia)",
    is3D: true
  },
  {
    name: "ARPILLA",
    description: "Máxima carga de ruptura...",
    specs: { load: "2500 kg", diam: "16 mm", mat: "Nylon-X", elong: "1%", grip: "Alta", loadResist: "Excelente" },
    bg: "var(--bg-arpilla)"
  },
];

let currentThumb = thumbs[0];

// 3. FUNCIÓN DE ACTUALIZACIÓN VISUAL
function updateProduct(index) {
  const data = productData[index];
  if (!data) return;

  // Fondo
  if (data.bg) mainContainer.style.background = data.bg;

  // Lógica 3D vs Imagen
  productImages.forEach((img) => img.classList.remove("active"));
  if (rafiaModel) rafiaModel.style.display = "none";

  if (data.is3D) {
    if (rafiaModel) rafiaModel.style.display = "block";
  } else {
    if (productImages[index]) productImages[index].classList.add("active");
  }

  // Textos
  if (title) title.innerText = data.name;
  if (desc) desc.innerText = data.description;

  // Specs
  if (specLoad) specLoad.innerText = data.specs.load;
  if (specDiam) specDiam.innerText = data.specs.diam;
  if (specMat) specMat.innerText = data.specs.mat;
  if (specElong) specElong.innerText = data.specs.elong;
  if (specGrip) specGrip.innerText = data.specs.grip;
  if (specLoadResist) specLoadResist.innerText = data.specs.loadResist;

  // Miniaturas (Thumbs)
  thumbs.forEach((t) => t.classList.remove("active"));
  if (thumbs[index]) thumbs[index].classList.add("active");
  currentThumb = thumbs[index];

  // Animación de entrada de texto
  title.classList.remove("fade-in-text");
  desc.classList.remove("fade-in-text");
  void textArea.offsetWidth; // Trigger reflow (reiniciar animación CSS)
  title.classList.add("fade-in-text");
  desc.classList.add("fade-in-text");
}

// 4. EVENTOS DE CAMBIO DE PRODUCTO
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    
    // === INTEGRACIÓN CON EL PADRE ===
    // Llamamos a la función global que definimos en AudioVisualizer.astro
    // Si la función existe, el padre decidirá si sonar o no (dependiendo del mute)
    if (typeof window.playGlobalClick === 'function') {
        window.playGlobalClick();
    }

    // Actualizamos la interfaz
    updateProduct(index);
  });
});

// 5. INICIALIZACIÓN
window.addEventListener("DOMContentLoaded", () => {
  updateProduct(0);
});