const modalDark = document.getElementById("modal-dark");

function activateModalDark() {
  modalDark.classList.remove("invisible");
}
function deactivateModalDark() {
  modalDark.classList.add("invisible");
}

export { modalDark, activateModalDark, deactivateModalDark };
