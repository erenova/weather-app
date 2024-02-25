/* eslint-disable import/no-cycle */
import findSvg from "../Icon/handleWeatherIcon";
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

function getDataForForecastModal() {}

export { setLastSearch, getDataForCurrentModal, getDataForForecastModal };
