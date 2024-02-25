import findSvg from "../Icon/handleWeatherIcon";
import * as ui from "./modalDark";

const { modalDark } = ui;
const expandModal = document.getElementById("expand-modal");
const pageLoading = document.getElementById("page-loading");

/* Dynamic UI items */
const currentHeat = document.getElementById("current-heat");
const currentCondition = document.getElementById("current-condition");
const currentIcon = document.getElementById("current-icon");
const currentTime = document.getElementById("current-time");
const currentFeelsLike = document.getElementById("feels-like-degree");
const cityName = document.getElementById("city-name");
const countryName = document.getElementById("country-name");
/* Icon */

function deactivateInfoModal() {
  expandModal.classList.add(`invisible`);
}

function setCurrentHeat(value) {
  currentHeat.innerText = value;
}
function setCurrentCondition(value) {
  currentCondition.innerText = value;
}
function setCurrentIcon(iconCode, isDay) {
  currentIcon.innerHTML = findSvg(iconCode, isDay);
}
function setCurrentTime(value) {
  currentTime.innerText = value;
}
function setCurrentFeelsLike(value) {
  currentFeelsLike.innerText = value;
}
function setCityName(value) {
  cityName.innerText = value;
}
function setCountryName(value) {
  countryName.innerText = value;
}

function setCurrentAll({
  heat,
  condition,
  iconCode,
  isDay,
  feelsLike,
  city,
  country,
}) {
  setCurrentHeat(heat);
  setCurrentCondition(condition);
  setCurrentIcon(iconCode, isDay);
  setCurrentFeelsLike(feelsLike);
  setCityName(city);
  setCountryName(country);
}
/* Loading Effect */
function loadingEffect() {
  const randomizedLoadDuration = Math.floor(Math.random() + 1) * 1000;
  pageLoading.classList.remove("invisible");
  setTimeout(() => {
    pageLoading.classList.add("invisible");
  }, randomizedLoadDuration);
  return randomizedLoadDuration;
}

modalDark.addEventListener("click", deactivateInfoModal);

export { setCurrentAll, setCurrentTime, loadingEffect };
