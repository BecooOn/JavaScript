let score = document.querySelector(".score");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
const btn1 = document.querySelector(".player1-Btn");
const btn2 = document.querySelector(".player2-Btn");
const reset = document.querySelector(".reset");
let total = document.querySelector("#total");
const tennis = document.querySelector(".tennis");
const winner = document.querySelector(".winner");

btn1.addEventListener("click", () => {
  if (total.value >= 1) {
    player1.textContent++;
    tennis.play();
    if (player1.textContent == total.value) {
      btn1.disabled = true;
      btn2.disabled = true;
      player1.style.color = "green";
      player2.style.color = "red";
      winner.play();
    }
  } else {
    alert("Please enter a valid number into 'Score to Win'!");
  }
});
btn2.addEventListener("click", () => {
  if (total.value >= 1) {
    player2.textContent++;
    tennis.play();
    if (player2.textContent == total.value) {
      btn1.disabled = true;
      btn2.disabled = true;
      player2.style.color = "green";
      player1.style.color = "red";
      winner.play();
    }
  } else {
    alert("Please enter a valid number into 'Score to Win'!");
  }
});
reset.addEventListener("click", () => {
  btn1.disabled = false;
  btn2.disabled = false;
  player1.style.color = "black";
  player2.style.color = "black";
  player1.textContent = 0;
  player2.textContent = 0;
  total.value = 1;
});
