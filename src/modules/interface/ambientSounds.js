import { popAlert, popSuccess } from "./popup";

const soundsMobile = document.getElementById("soundsMobile");
const soundsDesktop = document.getElementById("soundsDesktop");

function AmbientListener(event) {
  if (event.target.checked === true) {
    popSuccess("Ambient Sounds Enabled!");
  } else {
    popAlert("Ambient Sounds Disabled...");
  }
}
soundsDesktop.addEventListener("change", AmbientListener);
soundsMobile.addEventListener("change", AmbientListener);

console.log("hello");
