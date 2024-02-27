/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import { findSvg } from "../Icon/handleWeatherIcon";
import { getCurrentHourOnly } from "../function/clock";
import { clearDotsFromTemp } from "../function/searchForm";
import { getDataForForecastModal } from "../function/trackLastSearch";
import { popAlert } from "./popup";

const hoursInfo = document.getElementById("hours-info");
let activePageView = "default";

function getDataBoxes() {
  return document.querySelectorAll("[data-box]");
}

function hideForecastButtons() {
  document.querySelectorAll("[data-forecast]").forEach((element) => {
    element.classList.remove("lg:block");
  });
}
function showForecastButtons() {
  document.querySelectorAll("[data-forecast]").forEach((element) => {
    element.classList.add("lg:block");
  });
}
function addPaddingForFullDay() {
  document.getElementById("hours-info").classList.add("pb-20");
}
function removePaddingFromView() {
  document.getElementById("hours-info").classList.remove("pb-20");
}
// eslint-disable-next-line no-unused-vars
function findBlockElement(index) {
  return document.querySelector(`[data-box="${index}"]`);
}

function clearAllBlocks() {
  getDataBoxes().forEach((item) => {
    item.remove();
  });
}

// eslint-disable-next-line consistent-return
export default function createBlocks(amountOfBlocks) {
  if (
    !(typeof amountOfBlocks === "number") ||
    amountOfBlocks <= 0 ||
    amountOfBlocks > 24
  ) {
    return popAlert("Please Enter Valid Amount of Blocks");
  }

  clearAllBlocks();

  let currentHour = getCurrentHourOnly(true);
  currentHour++;
  let dayForecastIndex = currentHour + amountOfBlocks;

  const differenceIndex = 24 - dayForecastIndex;
  if (dayForecastIndex > 24) {
    dayForecastIndex = 24;
  }
  let todayForecast = getDataForForecastModal({ day: "today" });
  let indexForBorder = 0;
  if (currentHour === 24) {
    todayForecast = getDataForForecastModal({ day: "tomorrow" });
    currentHour = 0;
    dayForecastIndex = 9;
  }

  for (currentHour; currentHour < dayForecastIndex; currentHour++) {
    const findCurrentHourObj = todayForecast[currentHour];
    let borderClass = `border-2`;
    if (indexForBorder === 1 || indexForBorder === 4 || indexForBorder === 7) {
      borderClass = `border-t-2 border-b-2`;
      indexForBorder++;
    }
    const blockElement = `<button
          type="button"
          data-box="${currentHour}"
          class="${borderClass} border-[#2d3748] dark:border-white rounded-sm grid grid-cols-2 grid-rows-2 place-items-center lg:pr-5 lg:pl-5 lg:pt-1 lg:pb-1 shadow-sm active:shadow active:shadow-black shadow-black"
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
            <span data-condition-text="7">Parçalı bulutlu</span>
          </div>
        </button>`;
    hoursInfo.innerHTML += blockElement;
  }
  if (differenceIndex < 0) {
    const tomorrowForecast = getDataForForecastModal({ day: "tomorrow" });

    for (
      let activeHour = 0;
      activeHour < Math.abs(differenceIndex);
      activeHour++
    ) {
      const findCurrentHourObj = tomorrowForecast[activeHour];
      let borderClass = `border-2`;
      if (
        indexForBorder === 1 ||
        indexForBorder === 4 ||
        indexForBorder === 7
      ) {
        borderClass = `border-t-2 border-b-2`;
        indexForBorder++;
      }
      const blockElement = `<button
          type="button"
          data-box="${activeHour}"
          data-tomorrow
          class="${borderClass} border-[#2d3748] dark:border-white rounded-sm grid grid-cols-2 grid-rows-2 place-items-center lg:pr-5 lg:pl-5 lg:pt-1 lg:pb-1 shadow-sm active:shadow active:shadow-black shadow-black"
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
            <span data-condition-text="7">Parçalı bulutlu</span>
          </div>
        </button>`;
      hoursInfo.innerHTML += blockElement;
    }
  }
}
