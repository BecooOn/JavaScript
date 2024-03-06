const home = document.getElementById("home");
const random = document.getElementById("random");
const sections = document.querySelectorAll('.section');
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const question6 = document.getElementById("question6");
const question7 = document.getElementById("question7");
const question8 = document.getElementById("question8");
const question9 = document.getElementById("question9");
const question10 = document.getElementById("question10");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const buttons = [
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
    document.getElementById("btn5"),
    document.getElementById("btn6"),
    document.getElementById("btn7"),
    document.getElementById("btn8"),
    document.getElementById("btn9"),
    document.getElementById("btn10")
];


//! ---------------------SAYFA BUTON----------------------
function handleButtonClick(currentIndex) {
    home.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
    question7.style.display = "none";
    question8.style.display = "none";
    question9.style.display = "none";
    question10.style.display = "none";

    const selectedQuestion = document.getElementById(`question${currentIndex}`);
    if (selectedQuestion) {
        selectedQuestion.style.display = "block";
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        handleButtonClick(i + 1);
    });
}


//! --------------------NEXT-PREVİOUS BUTTONS-------------------
let currentIndex = 0;

previous.addEventListener("click", () => {
    if (currentIndex > 1) {
        handleButtonClick(currentIndex - 1);
        currentIndex--;
    }
});

next.addEventListener("click", () => {
    if (currentIndex < buttons.length) {
        handleButtonClick(currentIndex + 1);
        currentIndex++;
    }
});

random.addEventListener("click", () => {
    
})