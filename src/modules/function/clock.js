// eslint-disable-next-line import/no-cycle
import { setCurrentTime } from "../Interface/generalUI";

/* eslint-disable prefer-const */
const clockSettings = {
  timeZone: "Europe/Istanbul",
  intervalId: "",
};
function updateClock() {
  let currentHour = new Date()
    .toLocaleString("tr", { timeZone: clockSettings.timeZone })
    .slice(11, 16);
  let currentSecond = new Date()
    .toLocaleString("tr", { timeZone: clockSettings.timeZone })
    .slice(16);
  return [currentHour, currentSecond];
}

function activateClock(setCurrentTimeCallback) {
  clockSettings.intervalId = setInterval(() => {
    let [currentHour, currentSecond] = updateClock();
    setCurrentTimeCallback(currentHour, currentSecond);
  }, 1000);
}

function deactivateClock() {
  clearInterval(clockSettings.intervalId);
}

function setNewTimeZone(value) {
  deactivateClock();
  clockSettings.timeZone = value;
  activateClock(setCurrentTime);
}

export { setNewTimeZone, deactivateClock, activateClock };
