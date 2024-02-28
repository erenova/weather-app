/* eslint-disable import/no-cycle */
import { findSvg } from "../Icon/handleWeatherIcon";
import { getCurrentHourOnly } from "./clock";

let lastSearch = {};

function setLastSearch(objValue) {
  lastSearch = objValue;
}

function getDataForCurrentModal() {
  const { misc, weatherContent } = lastSearch;
  return {
    hourElement: getCurrentHourOnly(),
    cloudElement: misc.cloud,
    humidityElement: misc.humidity,
    windElement: misc.wind,
    iconElement: findSvg(weatherContent.code, weatherContent.isDay),
    conditionElement: weatherContent.text,
  };
}
function getLastCityName() {
  return lastSearch.location.name;
}
function getDataForForecastModal({ day, hour }) {
  const days = lastSearch.forecastDays;
  if (day === "today" && hour) {
    return days.today.hour[hour];
  }
  if (day === "tomorrow" && hour) {
    return days.tomorrow.hour[hour];
  }
  if (day === "other" && hour) {
    return days.other.hour[hour];
  }
  return days[day].hour;
}

export {
  setLastSearch,
  getDataForCurrentModal,
  getDataForForecastModal,
  getLastCityName,
};
