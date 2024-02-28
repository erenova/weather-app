import { getActiveLanguage, getText } from "../lang/language";
import { popAlert, popSuccess } from "./popup";

const soundsMobile = document.getElementById("soundsMobile");
const soundsDesktop = document.getElementById("soundsDesktop");

function AmbientListener(event) {
  popAlert(getText(getActiveLanguage(), "underDevelopment"));
}
soundsDesktop.addEventListener("change", AmbientListener);
soundsMobile.addEventListener("change", AmbientListener);
