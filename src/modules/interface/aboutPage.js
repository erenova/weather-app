import { getActiveLanguage, getText } from "../lang/language";
import { activateModalDark, deactivateModalDark, modalDark } from "./modalDark";
import { popSuccess } from "./popup";

const aboutModal = document.getElementById("about-modal");
const links = document.querySelectorAll("[data-link]");

function aboutOpen() {
  aboutModal.classList.remove("invisible");
  modalDark.classList.add("z-[80]");
  activateModalDark();
}
function aboutClose() {
  aboutModal.classList.add("invisible");
  modalDark.classList.remove("z-[80]");
  deactivateModalDark();
}

function linkClicked(event) {
  popSuccess(getText(getActiveLanguage(), "thanks"));

  setTimeout(() => {
    if (event.target.dataset.link === "linkedin") {
      window.open(`https://www.linkedin.com/in/erenova/`, "_blank");
    }
    if (event.target.dataset.link === "github") {
      window.open(`https://www.github.com/erenova/`, "_blank");
    }
  }, 2000);
}
links.forEach((item) => {
  item.addEventListener("click", linkClicked);
});
document.querySelectorAll("[data-about-button]").forEach((button) => {
  button.addEventListener("click", aboutOpen);
});

modalDark.addEventListener("click", aboutClose);
