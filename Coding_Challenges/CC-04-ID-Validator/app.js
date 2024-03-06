const btn = document.querySelector(".btn");
const number = document.querySelector("#number");
const name = document.querySelector("#name");

//?sonucu ekranda göstermek için
const result = document.createElement("p");
result.classList.add("result");
document.querySelector(".validator").appendChild(result);

let obj = {}; //?localstrage için

number.focus();
//?btn dinlemeye başlar
btn.addEventListener("click", () => {
  let id = number.value;
  const arrID = id.split("");
  const copyID = id.split("");

  let even = 0;
  let odd = 0;
  const ten = arrID.reduce((acc, cur, i) => {
    if (i < 9) {
      if (i % 2 !== 0) {
        odd += Number(cur); //2nd, 4th, 6th and 8th digits
      } else {
        even += Number(cur); //1st, 3rd, 5th, 7th and 9th digits
      }
    }
    acc = (even * 7 - odd) % 10;
    return acc;
  }, 0);
  //   console.log(ten);
  arrID[9] = ten;

  const eleven = arrID.reduce((acc, cur, i) => {
    if (i < 10) {
      acc += Number(cur);
    }
    return acc % 10;
  }, 0);
  //   console.log(eleven);
  arrID[10] = eleven;

  //   console.log(arrID, copyID);
  if (id === "") {
    result.classList.remove("result");
    result.classList.add("red");
    result.textContent = `You didn't enter a TR ID Number`;
  } else if (
    arrID[0] === 0 ||
    arrID.length !== 11 ||
    arrID[9] !== Number(copyID[9]) ||
    arrID[10] !== Number(copyID[10])
  ) {
    result.classList.remove("result");
    result.classList.add("red");
    result.textContent = `${id} is not a valid TR ID Number`;
  } else {
    result.classList.remove("red");
    result.classList.add("result");
    result.textContent = `${id} is a valid TR ID Number`;
  }

  obj = {
    name: name.value,
    id: number.value,
  };
  const personName = JSON.stringify(obj.name);
  const personID = JSON.stringify(obj.id);
  localStorage.setItem("name", personName);
  localStorage.setItem("id", personID);
  // localStorage.clear();

  name.value = "";
  number.value = "";
  number.focus();
  setTimeout(() => (result.textContent = ""), 3000);
});

//?DOMContentLoaded
// document.addEventListener("DOMContentLoaded", () => {
//   name.value = localStorage.getItem("name");
//   number.value = localStorage.getItem("id");
// });

//?Enter tuşu için
document.addEventListener("keydown", function (e) {
  if (e.key === "Delete" || e.key === "Backspace") {
    document.querySelector("#number").click();
    document.querySelector("#name").click();
  } else if (e.key === "Enter") {
    btn.click();
  }
});
