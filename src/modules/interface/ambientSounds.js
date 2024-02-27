import { popAlert, popSuccess } from "./popup";

const soundsMobile = document.getElementById("soundsMobile");
const soundsDesktop = document.getElementById("soundsDesktop");

function AmbientListener(event) {
  popAlert("This Feature Is Under Development.");
}
soundsDesktop.addEventListener("change", AmbientListener);
soundsMobile.addEventListener("change", AmbientListener);
