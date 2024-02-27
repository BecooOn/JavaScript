const textarea = document.querySelector("#textarea");
const btn = document.querySelector(".counter");
const text = document.querySelector(".text");
const span = document.querySelector(".span");
const reset = document.querySelector(".reset");

let count = 0;
btn.addEventListener("click", () => {
  let str = textarea.value;
  const pattern = /[aeıioöuüAEIİOÖUÜ]/g;
  count = str.match(pattern)?.length || 0;
  if (count > 0) {
    if (count === 1) {
      text.textContent = `There is ${count} vowel in `;
      span.textContent = `"${str}"`;
    } else {
      text.textContent = `There is ${count} vowel in `;
      span.textContent = `"${str}"`;
    }
  } else {
    text.textContent = `There is no vowel in `;
    span.textContent = `"${str}"`;
  }
  textarea.value = "";
  textarea.focus();
});
textarea.focus();
document.addEventListener("keydown", function (e) {
  if (e.key === "Delete" || e.key === "Backspace") {
    document.querySelector("#textarea").click();
  } else if (e.key === "Enter") {
    btn.click();
  }
});
reset.addEventListener("click", () => {
  count = 0;
  textarea.value = "";
  text.textContent = "";
  span.textContent = "";
});
