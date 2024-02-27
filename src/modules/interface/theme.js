import { getThemeIcon } from "../Icon/handleWeatherIcon";
import { popSuccess } from "./popup";

const darkIcons = document.querySelectorAll("[data-dark-icon]");
const themeButton = document.querySelectorAll("[data-theme-button]");

let activeTheme = "light";

function setIcon(theme) {
  darkIcons.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.innerHTML = getThemeIcon(theme);
  });
}

function switchTheme() {
  const htmlClassList = document.querySelector("html").classList;
  if (htmlClassList.contains("dark")) {
    htmlClassList.remove("dark");
    setIcon(activeTheme);
    activeTheme = "light";
    popSuccess("Light Theme Enabled");
    return;
  }
  if (activeTheme === "light") {
    htmlClassList.add("dark");
    setIcon(activeTheme);
    activeTheme = "dark";
    popSuccess("Dark Theme Enabled");
  }
}

themeButton.forEach((button) => {
  button.addEventListener("click", switchTheme);
});
