document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // 1. Lógica unificada (Móvil y Escritorio)
  // Verificamos si ya había una preferencia guardada
  const saved = localStorage.getItem("theme");
  
  if (saved === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  // 2. Si no hay botón (por ejemplo, en algunas páginas), terminamos aquí
  if (!btn) return;

  // 3. Añadimos el evento al botón (funciona con touch en móvil y click en desktop)
  btn.addEventListener("click", () => {
    // Alternar la clase 'dark'
    const isDark = html.classList.toggle("dark");
    
    // Guardar la preferencia del usuario
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});