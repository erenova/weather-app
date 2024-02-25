const alertBox = document.getElementById("alert");
const successBox = document.getElementById("success");

function flyAlertPopup() {
  alertBox.classList.add("-translate-x-[120%]");
}

function flySuccessPopup() {
  successBox.classList.add("-translate-x-[120%]");
}

function popAlert(text) {
  alertBox.innerText = text;
  alertBox.classList.remove("-translate-x-[120%]");
  setTimeout(() => {
    flyAlertPopup();
  }, 3500);
}

function popSuccess(text) {
  successBox.innerText = text;
  successBox.classList.remove("-translate-x-[120%]");
  setTimeout(() => {
    flySuccessPopup();
  }, 3500);
}

alertBox.addEventListener("click", flyAlertPopup);
successBox.addEventListener("click", flySuccessPopup);

popSuccess("Successfully changed!");
