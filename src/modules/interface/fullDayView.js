/* eslint-disable no-plusplus */
import { findSvg } from "../Icon/handleWeatherIcon";
import { clearDotsFromTemp } from "../function/searchForm";
import { getDataForForecastModal } from "../function/trackLastSearch";
import { getActiveLanguage } from "../lang/language";
import { expandForecastModalClick } from "./generalUI";
import { popAlert } from "./popup";
import {
  clearAllBlocks,
  getActivePageView,
  setActivePageView,
} from "./weatherBox";

const hoursInfo = document.getElementById("hours-info");
/* elements */

const forecastotherDayText = document.querySelectorAll("[data-other-day]");
function getAndAssingOtherDayName() {
  const today = new Date();
  const otherDay = new Date(today.setDate(today.getDate() + 2));

  const DayName = otherDay.toLocaleDateString("en", {
    weekday: "long",
  });
  forecastotherDayText.forEach((item) => {
    item.innerText = DayName;
  });
}
getAndAssingOtherDayName();
/* elements */
function hideForecastButtons() {
  document.querySelectorAll("[data-forecast]").forEach((element) => {
    element.classList.remove("lg:block");
  });
}

function activateGoBackButton() {
  document.getElementById("back-page-desktop").classList.remove("invisible");
  document.getElementById("back-page-mobile").classList.remove("invisible");
}

function addPaddingForFullDay() {
  document.getElementById("hours-info").classList.add("pb-20");
}

function createNewPage(day) {
  if (day === getActivePageView()) return;
  clearAllBlocks();
  activateGoBackButton();
  addPaddingForFullDay();
  hideForecastButtons();
  let currentHour = 0;

  currentHour++;
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
          class="${borderClass} border-[#2d3748] dark:border-white rounded-sm grid grid-cols-2 grid-rows-2 place-items-center lg:pr-5 lg:pl-5 lg:pt-1 lg:pb-1 shadow-sm active:shadow active:shadow-black shadow-black lg:max-h-40 lg:w-[65%]"
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
