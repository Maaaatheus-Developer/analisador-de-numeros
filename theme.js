const toggleBtn = document.getElementById("toggleTheme");
const currentTheme = localStorage.getItem("theme");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Detecta o tema do sistema, caso não tenha sido salvo ainda
if (!currentTheme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
} else {
  setTheme(currentTheme);
}

// Alterna tema ao clicar
toggleBtn.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  setTheme(theme === "dark" ? "light" : "dark");
});
