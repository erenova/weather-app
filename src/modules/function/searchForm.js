import searchCity from "../API/handleApi";
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
    inputElement.value = checkValue;

    return true;
  }
  return false;
}

function formSubmitted(submitEvent) {
  submitEvent.preventDefault();
  if (submitEvent.target === desktopForm && inputCheckup(desktopInput)) {
    searchCity(desktopInput.value);
  } else if (submitEvent.target === mobileForm && inputCheckup(mobileInput)) {
    searchCity(mobileInput.value);
    deactivateSearchMenu();
  } else {
    Error("şimdilik error returnluyorum");
  }
}

desktopForm.addEventListener("submit", formSubmitted);
mobileForm.addEventListener("submit", formSubmitted);
