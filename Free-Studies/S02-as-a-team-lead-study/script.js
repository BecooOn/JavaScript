const home = document.getElementById("home");
const sections = document.querySelectorAll(".section");
const buttons = document.querySelectorAll(".btn");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const check = document.querySelectorAll("#check");
const solutions = document.querySelectorAll(".solution");
const questions = document.querySelectorAll(".question");
const btnSound = document.querySelector("#btnSound");

//! ---------------------SAYFA BUTON----------------------
function pageBtnClick(currentIndex) {
  questions.forEach((question, index) => {
    if (index + 1 === currentIndex) {
      question.style.display = "block";
    } else {
      question.style.display = "none";
    }
  });
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    pageBtnClick(index + 1);
    btnSound.play();
  });
});

//! --------------------NEXT-PREVİOUS BUTTONS-------------------
let currentIndex = 0; // Doğru değerle başlatıldı

previous.addEventListener("click", () => {
  if (currentIndex > 1) {
    showQuestion(currentIndex - 1); // currentIndex azaltıldı
    // currentIndex--;
  } else {
    showQuestion(1);
    currentIndex = 1;
  }
  btnSound.play();
});

next.addEventListener("click", () => {
  if (currentIndex < 21) {
    showQuestion(currentIndex + 1);
    // currentIndex++;
  } else {
    showQuestion(21);
  }
  btnSound.play();
});

function showQuestion(questionNumber) {
  sections.forEach((section) => {
    section.style.display = "none";
  });
  solutions.forEach((solution) => {
    solution.style.display = "none";
  });
  const selectedQs = document.getElementById("question" + questionNumber);
  if (selectedQs) {
    selectedQs.style.display = "block";
  }
  currentIndex = questionNumber; // previous ve next butonları ile senkronizasyon sağlamak için
}

//! --------------------CHECK BUTTON-------------------

check.forEach((checkBtn, index) => {
  checkBtn.addEventListener("click", () => {
    showSolution(index + 1);
    btnSound.play();
  });
});
function showSolution(solutionNumber) {
  solutions.forEach((solution) => {
    solution.style.display = "none";
  });
  const selectedSolution = document.getElementById("solution" + solutionNumber);
  if (selectedSolution) {
    selectedSolution.style.display = "block";
  }
}
