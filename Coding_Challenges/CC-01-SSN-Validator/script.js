const header = document.querySelector(".header>p");
const alarm = document.querySelector(".alarm");
const btn = document.querySelector(".button-78");
const input = document.querySelector("#input");

function rndColor() {
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);

  return `rgb(${color1},${color2},${color3})`;
}

setInterval(function () {
  header.style.backgroundColor = rndColor();
}, 2000);

btn.addEventListener("click", () => {
  let inputValue = input.value;
  let pattern = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;
  let isValid = pattern.test(inputValue);
  let num = /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
  if (isValid) {
    if (num.test(input.value)) {
      alarm.textContent = `${inputValue} is valid entry!`;
      alarm.style.color = "green";
    } else {
      alarm.textContent = `${inputValue} is invalid entry!`;
      alarm.style.color = "red";
    }
  } else {
    alarm.textContent = "Invalid entry!";
    alarm.style.color = "red";
  }
  input.value = "";
  input.focus();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Delete" || e.key === "Backspace") {
    input.click();
  } else if (e.key === "Enter") {
    btn.click();
  }
});
