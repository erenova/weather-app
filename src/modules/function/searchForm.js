import searchCity from "../API/handleApi";
import { loadingEffect, setCurrentAll } from "../interface/generalUI";
import { deactivateSearchMenu } from "../interface/mobileUI";
import createBlocks from "../interface/weatherBox";
import { setNewTimeZone } from "./clock";
import { setLastSearch } from "./trackLastSearch";

const mobileForm = document.getElementById("search-form-mobile");
const mobileInput = document.getElementById("search-input-mobile");
const mobileSearchButton = document.getElementById("search-button-mobile");
const desktopForm = document.getElementById("search-form-desktop");
const desktopInput = document.getElementById("search-input-desktop");
const desktopSearchButton = document.getElementById("search-button-desktop");

function inputCheckup(inputElement) {
  const checkValue = inputElement.value.trim();

  if (typeof checkValue === "string" && checkValue.length > 0) {
    // eslint-disable-next-line no-param-reassign
    inputElement.value = checkValue;

    return true;
  }
  return false;
}
function clearDotsFromTemp(input) {
  const currentHeat = input.toLocaleString();
  const heatDotIndex = currentHeat.indexOf(".");
  if (heatDotIndex !== -1) {
    return currentHeat.slice(0, heatDotIndex);
  }
  return currentHeat;
}

export default async function setSearchResult(inputCity) {
  const result = await searchCity(inputCity);
  const currentHeat = clearDotsFromTemp(result.currentTemp.celsius);
  const feelsLikeHeat = clearDotsFromTemp(result.feelsLike.celsius);
  setNewTimeZone(result.misc.timezone);
  setLastSearch(result);
  createBlocks(9);
  setCurrentAll({
    heat: currentHeat,
    condition: result.weatherContent.text,
    iconCode: result.weatherContent.code,
    isDay: result.weatherContent.isDay,
    feelsLike: feelsLikeHeat,
    city: result.naming.cityName,
    country: result.naming.countryName,
  });
}

function formSubmitted(submitEvent) {
  submitEvent.preventDefault();

  if (
    (submitEvent.target === desktopForm ||
      submitEvent.target === desktopSearchButton) &&
    inputCheckup(desktopInput)
  ) {
    loadingEffect();
    setSearchResult(desktopInput.value);
    desktopInput.blur();
  } else if (
    (submitEvent.target === mobileForm ||
      submitEvent.target === mobileSearchButton) &&
    inputCheckup(mobileInput)
  ) {
    loadingEffect();
    deactivateSearchMenu();
    setSearchResult(mobileInput.value);
    mobileInput.value = "";
  } else {
    Error("şimdilik error returnluyorum");
  }
}

desktopForm.addEventListener("submit", formSubmitted);
mobileForm.addEventListener("submit", formSubmitted);

desktopSearchButton.addEventListener("click", formSubmitted);
mobileSearchButton.addEventListener("click", formSubmitted);

export { clearDotsFromTemp };
