const dayE1 = document.getElementById("days");
const hourE1 = document.getElementById("hours");
const minE1 = document.getElementById("mins");
const secondE1 = document.getElementById("seconds");

let newYear = "1 Mar 2022";

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

let calculate = function () {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSecond = (newYearDate - currentDate) / 1000;

  const textDays = Math.floor(totalSecond / 3600 / 24);
  const textHours = Math.floor(totalSecond / 3600) % 24;
  const textMins = Math.floor(totalSecond / 60) % 60;
  const textSeconds = Math.floor(totalSecond) % 60;

  dayE1.innerHTML = textDays;
  hourE1.innerHTML = formatTime(textHours);
  minE1.innerHTML = formatTime(textMins);
  secondE1.innerHTML = formatTime(textSeconds);
};
calculate();

setInterval(calculate, 1000);
