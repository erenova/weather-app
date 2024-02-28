import { popAlert } from "../interface/popup";
import { getActiveLanguage, getText } from "../lang/language";

const tempSignButtons = document.querySelectorAll("[data-switch]");

function temSignClicked() {
  popAlert(getText(getActiveLanguage(), "underDevelopment"));
}

tempSignButtons.forEach((tempButton) => {
  tempButton.addEventListener("click", temSignClicked);
});
