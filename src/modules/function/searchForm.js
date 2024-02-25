import searchCity from "../API/handleApi";
import { loadingEffect, setCurrentAll } from "../Interface/generalUI";
import { deactivateSearchMenu } from "../Interface/mobileUI";

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

async function setSearchResult(inputCity) {
  const result = await searchCity(inputCity);
  console.log(result);
  setCurrentAll({
    heat: result.currentTemp.celsius,
    condition: result.weatherContent.text,
    iconCode: result.weatherContent.code,
    isDay: result.weatherContent.isDay,
    feelsLike: result.feelsLike.celsius,
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
    const loadDuration = loadingEffect();
    setTimeout(() => {
      setSearchResult(desktopInput.value);
    }, loadDuration);
  } else if (
    (submitEvent.target === mobileForm ||
      submitEvent.target === mobileSearchButton) &&
    inputCheckup(mobileInput)
  ) {
    const loadDuration = loadingEffect();
    deactivateSearchMenu();
    setTimeout(() => {
      setSearchResult(mobileInput.value);
    }, loadDuration);
  } else {
    Error("şimdilik error returnluyorum");
  }
}

desktopForm.addEventListener("submit", formSubmitted);
mobileForm.addEventListener("submit", formSubmitted);

desktopSearchButton.addEventListener("click", formSubmitted);
mobileSearchButton.addEventListener("click", formSubmitted);
