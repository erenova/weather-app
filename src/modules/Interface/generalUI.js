import * as ui from "./modalDark";

const { modalDark } = ui;
const expandModal = document.getElementById("expand-modal");

/* Dynamic UI items */
const currentHeat = document.getElementById("current-heat");
const currentCondition = document.getElementById("current-condition");
const currentTime = document.getElementById("current-time");
const currentFeelsLike = document.getElementById("feels-like-degree");

function deactivateInfoModal() {
  expandModal.classList.add(`invisible`);
}

modalDark.addEventListener("click", deactivateInfoModal);
