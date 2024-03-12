let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let tens = document.querySelector("#tens");
let counterTens = 0;
let counterSec = 0;
let counterMin = 0;
let counterHour = 0;
let intervalID;

function start() {
  clearInterval(intervalID); // Mevcut zamanlayıcıyı temizlemek için, yoksa peş peşe start'larda kronometre durmaz.
  intervalID = setInterval(updateTens, 10);
  // console.log(intervalID);
}

function pause() {
  // console.log(intervalID);
  clearInterval(intervalID);
}

function reset() {
  clearInterval(intervalID);
  tens.textContent = "00";
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";
  counterTens = 0;
  counterSec = 0;
  counterMin = 0;
  counterHour = 0;
}
function updateTens() {
  counterTens++;
  if (counterTens < 10) {
    tens.textContent = "0" + counterTens;
  } else if (99 > counterTens || counterTens > 10) {
    tens.textContent = counterTens;
  }
  if (counterTens > 99) {
    counterTens = 0;
    tens.textContent = "00";
    updateSeconds();
  }
}
function updateSeconds() {
  counterSec++;
  if (counterSec < 10) {
    seconds.textContent = "0" + counterSec;
  } else if (59 >= counterSec || counterSec >= 10) {
    seconds.textContent = counterSec;
  }
  if (counterSec > 59) {
    counterSec = 0;
    seconds.textContent = "00";
    updateMinute();
  }
}
function updateMinute() {
  counterMin++;
  if (counterMin < 10) {
    minutes.textContent = "0" + counterMin;
  } else if (59 > counterMin || counterMin >= 10) {
    minutes.textContent = counterMin;
  }
  if (counterMin > 59) {
    counterMin = 0;
    minutes.textContent = "00";
    updateHour();
  }
}

function updateHour() {
  counterHour++;
  if (counterHour < 10) {
    hours.textContent = "0" + counterHour;
  } else if (24 > counterHour || counterHour >= 10) {
    hours.textContent = counterHour;
  }
  if (counterHour >=24) {
    counterHour = 0;
    hours.textContent = "00";
  }
}