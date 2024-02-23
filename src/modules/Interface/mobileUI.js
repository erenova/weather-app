import * as ui from "./modalDark";

const mobileMenu = document.getElementById("menu-mobile");
const closeMenuButton = document.getElementById("close-menu-mobile");
const settingsButton = document.getElementById("settings-button-mobile");
const { modalDark } = ui;
function showMobileMenu() {
  mobileMenu.classList.remove("translate-x-full");
}
function hideMobileMenu() {
  mobileMenu.classList.add("translate-x-full");
}

function activateMobileMenu() {
  showMobileMenu();
  ui.activateModalDark();
}

function deactivateMobileMenu() {
  hideMobileMenu();
  ui.deactivateModalDark();
}

/* On click to mobile nav, activate mobileMenu */
settingsButton.addEventListener("click", activateMobileMenu);

/* Close Mobile menu */
closeMenuButton.addEventListener("click", deactivateMobileMenu);
modalDark.addEventListener("click", deactivateMobileMenu);

export { activateMobileMenu, deactivateMobileMenu };
