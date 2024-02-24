import * as ui from "./modalDark";

const mobileMenu = document.getElementById("menu-mobile");
const closeMenuButton = document.getElementById("close-menu-mobile");
const settingsButton = document.getElementById("settings-button-mobile");
const searchMenuMobile = document.getElementById("search-menu-mobile");
const searchNavMobile = document.getElementById("search-nav-mobile");
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

function showSearchMenu() {
  searchMenuMobile.classList.remove("invisible");
  searchMenuMobile.classList.remove("opacity-0");
}
function hideSearchMenu() {
  searchMenuMobile.classList.add("invisible");
  searchMenuMobile.classList.add("opacity-0");
}

function activateSearchMenu() {
  showSearchMenu();
  ui.activateModalDark();
}

function deactivateSearchMenu() {
  hideSearchMenu();
  ui.deactivateModalDark();
}

/* On click to mobile nav, activate mobileMenu */
settingsButton.addEventListener("click", activateMobileMenu);

/* Close Mobile menu */
closeMenuButton.addEventListener("click", deactivateMobileMenu);
modalDark.addEventListener("click", deactivateMobileMenu);

/* Open search menu */
searchNavMobile.addEventListener("click", activateSearchMenu);
/* close search menu */
modalDark.addEventListener("click", deactivateSearchMenu);

export { activateMobileMenu, deactivateMobileMenu };
