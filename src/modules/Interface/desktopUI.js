import * as ui from "./modalDark";

const desktopSettings = document.getElementById("settings-desktop");
const desktopMenu = document.getElementById("menu-desktop");
const { modalDark } = ui;

function showDesktopMenu() {
  desktopMenu.classList.remove("invisible");

  desktopMenu.classList.remove("opacity-0");
}

function hideDesktopMenu() {
  desktopMenu.classList.add("invisible");

  desktopMenu.classList.add("opacity-0");
}

function activateDesktopSettings() {
  showDesktopMenu();
  ui.activateModalDark();
}

function deactivateDesktopSettings() {
  hideDesktopMenu();
  ui.deactivateModalDark();
}

desktopSettings.addEventListener("click", activateDesktopSettings);

modalDark.addEventListener("click", deactivateDesktopSettings);
