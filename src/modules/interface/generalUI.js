// eslint-disable-next-line import/no-cycle
import { findSvg } from "../Icon/handleWeatherIcon";
import { getDataForCurrentModal } from "../function/trackLastSearch";
import * as ui from "./modalDark";

const { modalDark } = ui;
const pageLoading = document.getElementById("page-loading");

/* Dynamic UI items */
/* Current section */
const currentHeat = document.getElementById("current-heat");
const currentCondition = document.getElementById("current-condition");
const currentIcon = document.getElementById("current-icon");
const currentHour = document.getElementById("current-hour");
const currentSecond = document.getElementById("current-second");
const currentFeelsLike = document.getElementById("feels-like-degree");
const cityName = document.getElementById("city-name");
const countryName = document.getElementById("country-name");

/* On main modal click section */
const expandModal = document.getElementById("expand-modal");
const modalBoxMain = document.querySelector('[data-modal-box="main"]');
function getModalElements(attribute) {
  return document.querySelector(`[data-active-modal="${attribute}"]`);
}

function activateInfoModal() {
  expandModal.classList.remove(`invisible`);
}
function deactivateInfoModal() {
  expandModal.classList.add(`invisible`);
}

function setActiveModalElements({
  hourElement,
  cloudElement,
  humidityElement,
  windElement,
  iconElement,
  conditionElement,
}) {
  getModalElements("hour").innerText = hourElement;
  getModalElements("cloud").innerText = cloudElement;
  getModalElements("humidity").innerText = humidityElement;
  getModalElements("wind").innerText = windElement;
  getModalElements("icon").innerHTML = iconElement;
  getModalElements("condition").innerText = conditionElement;
}
function expandMainModalClick() {
  activateInfoModal();
  ui.activateModalDark();
  setActiveModalElements(getDataForCurrentModal());
}
modalBoxMain.addEventListener("click", expandMainModalClick);

function expandForecastModalClick({
  hourElement,
  cloudElement,
  humidityElement,
  windElement,
  iconElement,
  conditionElement,
}) {
  activateInfoModal();
  ui.activateModalDark();
  setActiveModalElements({
    hourElement,
    cloudElement,
    humidityElement,
    windElement,
    iconElement,
    conditionElement,
  });
}

/* Icon */

function setCurrentHeat(value) {
  currentHeat.innerText = value;
}
function setCurrentCondition(value) {
  currentCondition.innerText = value;
}
function setCurrentIcon(iconCode, isDay) {
  currentIcon.innerHTML = findSvg(iconCode, isDay);
}
function setCurrentTime(hour, second) {
  currentHour.innerText = hour;
  currentSecond.innerText = second;
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
function loadingEffect(onStart) {
  let randomizedLoadDuration = Math.floor(Math.random() * 500) + 1000;
  if (onStart) {
    randomizedLoadDuration = 1000;
  }
  pageLoading.classList.remove("invisible");
  setTimeout(() => {
    pageLoading.classList.add("invisible");
  }, randomizedLoadDuration);
  return randomizedLoadDuration;
}

modalDark.addEventListener("click", deactivateInfoModal);
export {
  setCurrentAll,
  setCurrentTime,
  loadingEffect,
  setActiveModalElements,
  expandForecastModalClick,
};
