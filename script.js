/**
 * Toggle the mobile menu visibility
 */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/**
 * Dark / Light mode toggle
 */
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

// Apply dark mode on load if previously set
if (currentTheme === "dark") {
  setDarkMode();
}

// Event listeners for both toggle buttons
btn.addEventListener("click", setTheme);
btn2.addEventListener("click", setTheme);

/**
 * Toggle between light and dark mode
 */
function setTheme() {
  const currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

/**
 * Enable dark mode and update icons
 */
function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    const darkSrc = icon.getAttribute("src-dark");
    if (darkSrc) {
      icon.src = darkSrc;
    }
  });
}

/**
 * Enable light mode and update icons
 */
function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    const lightSrc = icon.getAttribute("src-light");
    if (lightSrc) {
      icon.src = lightSrc;
    }
  });
}
