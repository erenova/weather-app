import * as ui from "./modalDark";

const modalDark = ui.modalDark;
const expandModal = document.getElementById("expand-modal");
function deactivateInfoModal() {
  expandModal.classList.add(`invisible`);
}

function activateInfoModal() {
  expandModal.classList.remove(`invisible`);
}

modalDark.addEventListener("click", deactivateInfoModal);
