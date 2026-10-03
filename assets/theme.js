const themeButton = document.querySelector(".theme-toggle");
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.querySelector("span").textContent = dark ? "тёмная" : "светлая";
}
updateThemeButton();
themeButton.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  updateThemeButton();
  try { localStorage.setItem("portfolio-theme", theme); } catch (_) {}
});
