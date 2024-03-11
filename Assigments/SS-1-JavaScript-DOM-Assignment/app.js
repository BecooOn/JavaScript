// Kodlar buraya yazılacak.
// const container = document.getElementsByClassName("container");
// container.style = "margin:0; padding:0;";
const header = document.getElementById("header");
header.style =
  " background-color:green; text-align:center; padding:2.5rem; color:white;";
const h1 = document.getElementById("h1");
h1.style = " font-size: 2.5rem; ";
h1.textContent = "JavaScript DOM Assignment 1";
const parag = document.getElementById("parag");
parag.style =
  "display:flex; justify-content:center; gap:2rem; padding:1rem; font-size:1.3rem";
const nav = document.querySelector(".nav");
const nav1 = document.querySelector(".nav1");
nav.addEventListener("mouseover", () => {
  nav.style =
    "background-color:red; width:4rem; height:2rem; border-radius:8px";
});
nav.addEventListener("mouseout", () => {
  nav.style = "background-color:none; width:4rem;";
});
nav1.addEventListener("mouseover", () => {
  nav1.style =
    "background-color:red; width:6rem; height:2rem; border-radius:8px";
});
nav1.addEventListener("mouseout", () => {
  nav1.style = "background-color:none; width:4rem;";
});
const link = document.getElementsByClassName("link");
[...link].map((x) => (x.style = "text-decoration:none; color:white;"));

/* -------------------------------------------- */
/*                     main                     */
/* -------------------------------------------- */
const main = document.getElementById("main");
main.style =
  "letter-spacing:1.5rem; background-color:orange; padding-top:3rem;";
const name = document.getElementById("name");
name.placeholder = "name";
name.style =
  "width:12rem; height:3rem; padding:0.3rem; border-radius:8px; font-size:1rem;";
const paswrd = document.getElementById("paswrd");
paswrd.placeholder = "password";
paswrd.style =
  "width:12rem; height:3rem; padding:0.3rem; border-radius:8px; font-size:1rem;";
const login = document.getElementById("login");
login.value = "ENTER";
login.style =
  "height:3rem; padding:0.2rem; width:8rem; background-color:yellowgreen; border:none; border-radius:8px; cursor:pointer; font-size:1.2rem;";
login.addEventListener("mouseover", () => {
  login.style.backgroundColor = "red";
  login.style.color = "white";
});
login.addEventListener("mouseout", () => {
  login.style.backgroundColor = "yellowgreen";
  login.style.color = "black";
});

/* -------------------------------------------- */
/*                    footer                    */
/* -------------------------------------------- */
const footer = document.querySelector("#footer");
footer.style =
  "background-color: purple; text-align: center; font-weight: bolder; height:40vh; padding: 2rem;";
const p_footer = document.querySelector("#p_footer");
p_footer.style = "font-size: 2.5rem; color: white;";

const btn = document.querySelector("#btn");
const listItems = document.querySelectorAll(".list > li");
let currentIndex = 0;

btn.addEventListener("click", () => {
  if (currentIndex < listItems.length) {
    listItems[currentIndex].style.display = "block";
    listItems[currentIndex].style.padding = "0.5rem";
    listItems[currentIndex].style.fontSize = "1.2rem";
    currentIndex++;
  }
});

const list = document.querySelector(".list");
list.style = " padding:1rem; color:white;";

btn.style = "width: 8rem; font-size:1.5rem; border-radius:8px;"
listItems.textContent.style = "font-size:3rem;"