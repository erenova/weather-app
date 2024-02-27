import { popAlert } from "../interface/popup";

let activeLanguage = "en";

function getActiveLanguage() {
  return activeLanguage;
}
function setActiveLanguage(langShort) {
  activeLanguage = langShort;
}

const langDesktop = document.getElementById("language-selection-desktop");
const langMobile = document.getElementById("language-selection-mobile");

function selectToDefault() {
  langDesktop.selectedIndex = 0;
  langMobile.selectedIndex = 0;
}
function changeLanguage() {
  popAlert("The Feature Is Under Development");
  selectToDefault();
}

langDesktop.addEventListener("change", changeLanguage);
langMobile.addEventListener("change", changeLanguage);

export { getActiveLanguage, setActiveLanguage };
