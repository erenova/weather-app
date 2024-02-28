/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import { findSvg } from "../Icon/handleWeatherIcon";
import { clearDotsFromTemp } from "../function/searchForm";
import { getDataForForecastModal } from "../function/trackLastSearch";
import { getActiveLanguage, getText } from "../lang/language";
import { expandForecastModalClick } from "./generalUI";
import { deactivateMobileMenu } from "./mobileUI";
import { popSuccess } from "./popup";
import {
  clearAllBlocks,
  createBlocks,
  getActivePageView,
  setActivePageView,
} from "./weatherBox";

const hoursInfo = document.getElementById("hours-info");
/* elements */
const todayMobile = document.getElementById("today-mobile");
const tomorrowMobile = document.getElementById("tomorrow-mobile");
const otherMobile = document.getElementById("other-mobile");

/* Back Next buttons */
const backDesktop = document.getElementById("back-page-desktop");
const nextDesktop = document.getElementById("next-page-desktop");
const backMobile = document.getElementById("back-page-mobile");
const nextMobile = document.getElementById("next-page-mobile");

const forecastotherDayText = document.querySelectorAll("[data-other-day]");
function findOtherDayName(langCode) {
  const today = new Date();
  const otherDay = new Date(today.setDate(today.getDate() + 2));

  const DayName = otherDay.toLocaleDateString(langCode, {
    weekday: "long",
  });
  return DayName;
}
function getAndAssignOtherDayName(onlyPop) {
  const today = new Date();
  const otherDay = new Date(today.setDate(today.getDate() + 2));

  const DayName = otherDay.toLocaleDateString(getActiveLanguage(), {
    weekday: "long",
  });
  if (onlyPop) return DayName;
  forecastotherDayText.forEach((item) => {
    item.innerText = DayName;
  });
  return DayName;
}
getAndAssignOtherDayName();
/* elements */

function activateGoBackButton() {
  backDesktop.classList.remove("invisible");
  nextDesktop.classList.remove("invisible");
  backMobile.classList.remove("hidden");
  nextMobile.classList.remove("hidden");
}
function deactivateGoBackButton() {
  backDesktop.classList.add("invisible");
  nextDesktop.classList.add("invisible");
  backMobile.classList.add("hidden");
  nextMobile.classList.add("hidden");
}
document.getElementById("");
function removePaddingFromView() {
  document.getElementById("hours-info").classList.remove("pb-20");
}
function clickOnBack() {
  deactivateGoBackButton();
  removePaddingFromView();
  createBlocks(9);
}
backDesktop.addEventListener("click", clickOnBack);
backMobile.addEventListener("click", clickOnBack);

function clickOnNext() {
  const activeDay = getActivePageView();
  if (activeDay === "today") {
    createNewPage("tomorrow");
    popSuccess(getText(getActiveLanguage(), "tomorrow"));
  }
  if (activeDay === "tomorrow") {
    createNewPage("other");
    popSuccess(findOtherDayName(getActiveLanguage()));
  }
  if (activeDay === "other") {
    createNewPage("today");
    popSuccess(getText(getActiveLanguage(), "today"));
  }
}
nextDesktop.addEventListener("click", clickOnNext);
nextMobile.addEventListener("click", clickOnNext);

function addPaddingForFullDay() {
  document.getElementById("hours-info").classList.add("pb-20");
}

function addButtons() {
  if (document.getElementById("today-desktop")) removeButtons();
  hoursInfo.innerHTML += `<button
          id="today-desktop"
          
          class="col-start-1 col-end-2 hidden lg:block row-start-1"
        >
          <div data-language-text="viewForecast">
            ${getText(getActiveLanguage(), "viewForecast")}
          </div>
          <div class="font-bold drop-shadow" data-language-text="today">
            ${getText(getActiveLanguage(), "today")}
          </div>
        </button>
        <button
          id="tomorrow-desktop"
          class="col-start-2 col-end-3 hidden lg:block row-start-1"
        >
          <div data-language-text="viewForecast">
                        ${getText(getActiveLanguage(), "viewForecast")}

          </div>
          <div
            class="text-blue-500 font-bold drop-shadow"
            data-language-text="tomorrow"
          >
            ${getText(getActiveLanguage(), "tomorrow")}
          </div>
        </button>
        <button
          id="other-desktop"
          class="col-start-3 col-end-4 hidden lg:block row-start-1"
        >
          <div data-language-text="viewForecast">  ${getText(getActiveLanguage(), "viewForecast")}</div>
          <div
            class="text-amber-600 font-bold drop-shadow"
            data-other-day
          >
                        ${getAndAssignOtherDayName(true)}

          </div>
        </button>`;

  document.getElementById("today-desktop").addEventListener("click", todayPage);
  document
    .getElementById("tomorrow-desktop")
    .addEventListener("click", tomorrowPage);
  document.getElementById("other-desktop").addEventListener("click", otherPage);
}

function removeButtons() {
  document.getElementById("today-desktop").remove();
  document.getElementById("tomorrow-desktop").remove();
  document.getElementById("other-desktop").remove();
}

function createNewPage(day) {
  setActivePageView(day);
  clearAllBlocks();
  activateGoBackButton();
  addPaddingForFullDay();
  if (document.getElementById("today-desktop")) removeButtons();
  let currentHour = 0;

  const dayForecastIndex = 24;
  const dayForecast = getDataForForecastModal({ day });

  for (currentHour; currentHour < dayForecastIndex; currentHour++) {
    const findCurrentHourObj = dayForecast[currentHour];
    let borderClass = `border-2`;
    if (currentHour === 1 || currentHour === 4 || currentHour === 7) {
      borderClass = `border-t-2 border-b-2`;
    }

    const blockElement = `<button
          type="button"
          data-box="${currentHour}"
          class="${borderClass} border-[#2d3748] border-2 dark:border-white rounded-sm grid grid-cols-2 grid-rows-2 place-items-center lg:pr-5 lg:pl-5 lg:pt-1 lg:pb-1 shadow-sm active:shadow active:shadow-black shadow-black lg:max-h-40 lg:w-[65%]"
        >
          <div class="drop-shadow">${clearDotsFromTemp(findCurrentHourObj.temp_c)}<span data-temp-sign="°C">°C</span></div>
          <div class="w-10 drop-shadow">
            ${findSvg(findCurrentHourObj.condition.code, findCurrentHourObj.is_day)}
          </div>
          <div
            class="col-start-1 col-end-3 lg:col-end-2 lg:row-start-1 lg:row-end-2 mb row-start-2 row-end-3 pb"
          >
            <span class="drop-shadow">${findCurrentHourObj.time.slice(11)}</span>
          </div>
          <div class="hidden lg:block lg:text-center">
            <span data-condition-text>${findCurrentHourObj.condition.text}</span>
          </div>
        </button>`;
    hoursInfo.innerHTML += blockElement;
  }
  document.querySelectorAll(`[data-box]`).forEach((element) => {
    element.addEventListener("click", () => {
      const forecastInfo = getDataForForecastModal({
        day,
        hour: element.dataset.box,
      });
      expandForecastModalClick({
        hourElement: forecastInfo.time.slice(11, 13),
        cloudElement: forecastInfo.cloud,
        humidityElement: forecastInfo.humidity,
        windElement: forecastInfo.wind_kph,
        iconElement: findSvg(forecastInfo.condition.code, forecastInfo.is_day),
        conditionElement: forecastInfo.condition.text,
      });
    });
  });
}
function todayPage() {
  activateGoBackButton();
  createNewPage("today");
  deactivateMobileMenu();
}
function tomorrowPage() {
  activateGoBackButton();
  createNewPage("tomorrow");
  deactivateMobileMenu();
}
function otherPage() {
  activateGoBackButton();
  createNewPage("other");
  deactivateMobileMenu();
}
todayMobile.addEventListener("click", todayPage);
tomorrowMobile.addEventListener("click", tomorrowPage);
otherMobile.addEventListener("click", otherPage);

export { addButtons, removeButtons, getAndAssignOtherDayName };
