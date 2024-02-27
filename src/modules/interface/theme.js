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

function switchTheme(noAlert) {
  const htmlClassList = document.querySelector("html").classList;
  if (htmlClassList.contains("dark")) {
    localStorage.setItem("mode", "light");
    htmlClassList.remove("dark");
    setIcon(activeTheme);
    activeTheme = "light";
    popSuccess("Light Theme Enabled");
    return "light";
  }
  if (activeTheme === "light") {
    localStorage.setItem("mode", "dark");
    htmlClassList.add("dark");
    setIcon(activeTheme);
    activeTheme = "dark";
    if (noAlert === "noAlert") {
      return "dark";
    }
    popSuccess("Dark Theme Enabled");
  }
}

function userSettingForTheme() {
  if (localStorage.getItem("mode") === "dark") {
    switchTheme("noAlert");
  }
}
themeButton.forEach((button) => {
  button.addEventListener("click", switchTheme);
});

document.addEventListener("DOMContentLoaded", userSettingForTheme);
