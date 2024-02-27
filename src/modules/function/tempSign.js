import { popAlert } from "../interface/popup";

const tempSignButtons = document.querySelectorAll("[data-switch]");

function temSignClicked() {
  popAlert("This Feature Is Under Development.");
}

tempSignButtons.forEach((tempButton) => {
  tempButton.addEventListener("click", temSignClicked);
});
