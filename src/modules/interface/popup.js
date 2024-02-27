function flyPopup() {
  document.querySelector("#notification-tab").childNodes.forEach((item) => {
    item.addEventListener("click", () => {
      item?.classList?.add("-translate-x-[120%]");
      setTimeout(() => {
        item.remove();
      }, 300);
    });

    setTimeout(() => {
      item?.classList?.add("-translate-x-[120%]");
      setTimeout(() => {
        item.remove();
      }, 300);
    }, 2500);
  });
}

function popAlert(text) {
  const id = new Date().getTime();
  const alertElement = `    <div
      id="${id}"
      class="-translate-x-[120%] transition-transform fixed top-6 left-4 w-60 h-10 rounded-lg flex items-center bg-red-600 shadow shadow-black text-white p-8 font-bold z-50"
    >
      <span class="drop-shadow" data-language-text="alert" data-alert="">
        ${text}
      </span>
    </div>`;
  document.getElementById("notification-tab").innerHTML += alertElement;
  const notificationElement = document.getElementById(id);
  requestAnimationFrame(() => {
    notificationElement.classList.remove("-translate-x-[120%]");
    setTimeout(() => {
      notificationElement.classList.add("-translate-x-[120%]");
      setTimeout(() => {
        notificationElement.remove();
      }, 300);
    }, 3500);
  });
  flyPopup(notificationElement);
}
function popSuccess(text) {
  const id = new Date().getTime();
  const alertElement = `<div
      id="${id}"
      class="-translate-x-[120%] transition-transform fixed top-6 left-4 w-60 h-10 rounded-lg flex items-center bg-green-600 shadow shadow-black text-white p-8 font-bold z-50"
    >
      <span class="" data-language-text="success" data-success="">${text}</span></div>`;

  document.getElementById("notification-tab").innerHTML += alertElement;
  const notificationElement = document.getElementById(id);
  requestAnimationFrame(() => {
    notificationElement.classList.remove("-translate-x-[120%]");
    setTimeout(() => {
      notificationElement.classList.add("-translate-x-[120%]");
      setTimeout(() => {
        notificationElement.remove();
      }, 300);
    }, 3500);
  });
  flyPopup(notificationElement);
}

export { popAlert, popSuccess };
