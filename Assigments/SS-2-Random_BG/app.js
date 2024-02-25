// Kodlar buraya
const clickBtn = document.querySelector(".btn-click");
const over = document.querySelector(".btn-over");
let colorText = document.querySelector("#colorText");
let color = "#";
let color1 = "#";
let color2 = "#";
const letters = "0123456789ABCDEF";
const bgDiv = document.querySelector(".bgDiv");
const colorInput = document.querySelector("#colorInput");
const copy = document.querySelector("#copy");
// let cColor;

function generateColor() {
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    color1 += letters[Math.floor(Math.random() * 16)];
    color2 += letters[Math.floor(Math.random() * 16)];
    // direction = arr[Math.floor(Math.random() * 4)];
  }
  return color, color1, color2;
}
// console.log(generateColor());

clickBtn.addEventListener("click", () => {
  generateColor();
  let sum = `${color},${color1},${color2}`;
  bgDiv.style.backgroundImage = `conic-gradient(${color},${color1},${color2})`;
  colorText.textContent = sum;
  colorText.style.backgroundImage = `conic-gradient(${color},${color1},${color2})`;
  colorInput.style.backgroundImage = `conic-gradient(${color},${color1},${color2})`;
  colorInput.type = `background-image:conic-gradient(${color},${color1},${color2})`;
  colorInput.value = sum;
  color = "#";
  color1 = "#";
  color2 = "#";
});
over.addEventListener("mouseover", () => {
  generateColor();
  let sum = `${color},${color1},${color2}`;
  bgDiv.style.backgroundImage = `conic-gradient(${color},${color1},${color2})`;
  colorText.textContent = sum;
  colorText.style.backgroundImage = `conic-gradient(${color},${color1},${color2})`;
  colorInput.style.backgroundImage = `conic-gradient(${color},${color1},${color2})`;
  colorInput.type = `background-image:conic-gradient(${color},${color1},${color2})`;
  colorInput.value = sum;
  color = "#";
  color1 = "#";
  color2 = "#";
});
copy.addEventListener("click", function () {
  const text = colorText.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => alert("Color copied to clipboard!"))
    .catch((err) => console.error("Failed to copy color: ", err));
});
