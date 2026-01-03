document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const isMobile = window.innerWidth < 1024;

  if (isMobile) {
    // Siempre modo oscuro en móvil
    html.classList.add("dark");
    return;
  }

  // Escritorio: usar tema guardado
  const saved = localStorage.getItem("theme");
  if (saved === "dark") html.classList.add("dark");

  // 🚨 Si no hay botón, NO seguimos
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
