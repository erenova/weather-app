import { popAlert } from "../interface/popup";

let activeLanguage = "en";

function getActiveLanguage() {
  return activeLanguage;
}
function setActiveLanguage(langShort) {
  activeLanguage = langShort;
  localStorage.setItem("activeLanguage", langShort);
}

const langDesktop = document.getElementById("language-selection-desktop");
const langMobile = document.getElementById("language-selection-mobile");

function selectToDefault() {}
function changeLanguage(event) {
  localStorage.setItem("activeLanguage", event.target.value);
}

langDesktop.addEventListener("change", changeLanguage);
langMobile.addEventListener("change", changeLanguage);

export { getActiveLanguage, setActiveLanguage };
