/* eslint-disable no-param-reassign */
import tr from "./tr.json";
import en from "./en.json";
import ru from "./ru.json";
import de from "./de.json";
import { deactivateMobileMenu } from "../interface/mobileUI";
import { popSuccess } from "../interface/popup";

const langDesktop = document.getElementById("language-selection-desktop");
const langMobile = document.getElementById("language-selection-mobile");

function getLanguageIndex(langCode) {
  switch (langCode) {
    case "en":
      return 0;
    case "tr":
      return 1;
    case "ru":
      return 2;
    case "de":
      return 3;
    default:
      return 0;
  }
}

function selectToIndex(index) {
  langDesktop.selectedIndex = index;
  langMobile.selectedIndex = index;
}
function getLangData(langCode) {
  switch (langCode) {
    case "tr":
      return tr;
    case "en":
      return en;
    case "de":
      return de;
    case "ru":
      return ru;
    default:
      return en;
  }
}

function getLanguage() {
  const langCode = localStorage.getItem("activeLanguage") || "en";
  selectToIndex(getLanguageIndex(langCode));
  updateDomToNewLang(langCode);
  return langCode;
}

//! Active Language Active Language
let activeLanguage = getLanguage();

function getActiveLanguage() {
  return activeLanguage || "en";
}
function findOtherDayName(langCode) {
  const today = new Date();
  const otherDay = new Date(today.setDate(today.getDate() + 2));

  const DayName = otherDay.toLocaleDateString(langCode, {
    weekday: "long",
  });
  return DayName;
}

function updateDomToNewLang(langCode) {
  document.querySelectorAll("[data-language-text]").forEach((item) => {
    const newText = item.dataset.languageText;
    const langData = getLangData(langCode);
    item.innerText = langData[newText];
  });
  document.querySelectorAll("[data-other-day]").forEach((element) => {
    element.textContent = findOtherDayName(langCode);
  });
}
function setActiveLanguage(langShort) {
  activeLanguage = langShort;
  localStorage.setItem("activeLanguage", langShort);
}
function getText(language, textCode) {
  if (!language) language = en;
  return getLangData(language)[textCode];
}
function renamePlaceHolder(activeLang) {
  document.querySelectorAll("[placeholder]").forEach((input) => {
    input.placeholder = getText(activeLang, "cityName");
  });
}
function changeLanguage(event) {
  const lCode = event.target.value;
  if (lCode === "tr" || lCode === "en" || lCode === "ru" || lCode === "de")
    setActiveLanguage(lCode);
  updateDomToNewLang(lCode);
  deactivateMobileMenu();
  renamePlaceHolder(lCode);
  popSuccess(`${getText(lCode, "languageSwitch")}: ${getText(lCode, lCode)} `);
  location.reload();
}

renamePlaceHolder(activeLanguage);

langDesktop.addEventListener("change", changeLanguage);
langMobile.addEventListener("change", changeLanguage);

export { getActiveLanguage, setActiveLanguage, getText };
