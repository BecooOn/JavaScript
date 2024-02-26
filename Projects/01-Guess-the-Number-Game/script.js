let randomNum = Math.ceil(Math.random() * 100);

const startBtn = document.querySelector(".start-btn");
const color = document.querySelector(".color");
const storeNum = document.querySelector("#storeNum");
let guess = document.querySelector("#guess");
const check = document.querySelector(".check");
let right = document.querySelector("#right");
let grade = document.querySelector("#grade");
const container = document.querySelector(".container");
const container1 = document.querySelector(".container1");
let message = document.querySelector(".message");
const footer = document.querySelector(".footer");
let hak = document.querySelector(".hak");
let point = document.querySelector(".point");
let h1 = document.querySelector(".h1");
right = "10";
let temp = 10;

//? color-blok-start---------------------------------------
let color1 = "#";
let color2 = "#";
let color3 = "#";
let color4 = "#";
const letters = "0123456789ABCDEF";
function generateColor() {
  for (let i = 0; i < 6; i++) {
    color1 += letters[Math.floor(Math.random() * 16)];
    color2 += letters[Math.floor(Math.random() * 16)];
    color3 += letters[Math.floor(Math.random() * 16)];
    color4 += letters[Math.floor(Math.random() * 16)];
  }
  return color1, color2, color3, color4;
}
color.addEventListener("click", () => {
  generateColor();
  container.style.backgroundImage = `conic-gradient(${color1},${color2},${color3})`;
  h1.style.color = `${color4}`;
  color1 = "#";
  color2 = "#";
  color3 = "#";
  color4 = "#";
});
//? color-blok-end---------------------------------------

//? start-btn--------------------------------------------
startBtn.addEventListener("click", () => {
  document.querySelector(".container1").style = "display:block";
  randomNum = Math.ceil(Math.random() * 100);
  container.style.backgroundColor = "rgb(218, 212, 205)";
  document.querySelector(".remind").style.display = "block";
  message.style.display = "none";
  message.style.color = "red";
  temp = 10;
  hak.textContent = temp;
  storeNum.textContent = "?";
  guess.value = "";
  point.textContent = 0;
  check.disabled = false;
  color.disabled = false;
  check.style.backgroundColor = "rgb(155, 128, 93)";
  color.style.backgroundColor = "rgb(155, 128, 93)";
  startBtn.style.backgroundColor = "rgb(155, 128, 93)";
  document.querySelector(".audio1").play();
});

//? check button---------------------------------------------
check.addEventListener("click", () => {
  const guess1 = guess.value;
  message.style.display = "block";
  //? yanlış giriş için
  if (!guess1 || isNaN(guess1)) {
    temp--;
    message.textContent = "Enter the valid number!";
    hak.textContent = temp;
    if (temp == 0) {
      check.disabled = true;
      color.disabled = true;
      check.style.backgroundColor = "rgb(175, 170, 170)";
      color.style.backgroundColor = "rgb(175, 170, 170)";
      startBtn.style.backgroundColor = "green";
      message.textContent = "Game Over!😢";
      point.textContent = 100 - (right - temp) * (100 / right) + "%";
      container.style.backgroundColor = "red";
      message.style.color = "black";
      storeNum.textContent = randomNum;
      document.querySelector(".audio3").play();
    }

    //? doğru tahmin
  } else if (randomNum == guess1) {
    message.textContent = "Congratulation! You got it right!😎";
    container.style.backgroundColor = "green";
    message.style.color = "white";
    storeNum.textContent = randomNum;
    check.disabled = true;
    color.disabled = true;
    point.textContent = 100 - (right - temp) * (100 / right) + "%";
    document.querySelector(".audio2").play();
    //? tahmin yanlış olursa
  } else {
    if (temp > 1) {
      temp--;
      hak.textContent = temp;
      guess1 > randomNum
        ? (message.textContent = "Decerease the number!")
        : (message.textContent = "Increase the number!");
    } else {
      message.textContent = "Game Over!😢";
      storeNum.textContent = randomNum;
      hak.textContent = 0;
      point.textContent = 100 - (right - temp) * (100 / right) + "%";
      container.style.backgroundColor = "red";
      message.style.color = "black";
      document.querySelector(".audio3").play();
    }
  }
  guess.value = "";
  guess.focus();
  document.querySelector(".remind").style.display = "none";
});

//?Enter tuşu için
document.addEventListener("keydown", function (e) {
  if (e.key === "Delete" || e.key === "Backspace") {
    document.querySelector("#guess").click();
  } else if (e.key === "Enter") {
    check.click();
  }
});
