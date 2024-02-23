import * as ui from "./modalDark";

const { modalDark } = ui;
const expandModal = document.getElementById("expand-modal");
function deactivateInfoModal() {
  expandModal.classList.add(`invisible`);
}

modalDark.addEventListener("click", deactivateInfoModal);
