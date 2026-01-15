document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Definimos qué es móvil (menor a 1024px)
  const isMobile = window.innerWidth < 1024;

  if (isMobile) {
    // --- CAMBIO AQUÍ ---
    // En lugar de add("dark"), usamos remove("dark") para asegurar que sea blanco/claro
    html.classList.remove("dark"); 
    
    // El return evita que se lea el localStorage o se active el botón en móvil
    return; 
  }

  // Lógica para Escritorio (Desktop)
  const saved = localStorage.getItem("theme");
  if (saved === "dark") html.classList.add("dark");

  // Si no hay botón, no seguimos
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});