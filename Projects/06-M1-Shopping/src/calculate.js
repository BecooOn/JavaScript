import { addToBasketUpdate } from "./addToBasket";
let hPrice = document.querySelector("#h-Price");
const cartArea = document.querySelector("#offcanvasScrolling");
const offcanvasBody = document.querySelector(".offcanvas-body");
const cartQuantity = document.getElementById("basket");
export const basket = (data) => {
  cartArea.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-plus")) {
      // console.log(e.target.previousElementSibling);
      e.target.previousElementSibling.textContent++;
      // console.log(quantity);
      calculate(e.target);
    } else if (e.target.classList.contains("fa-minus")) {
      if (e.target.nextElementSibling.textContent > 1) {
        // console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.textContent--;
        // console.log(quantity);
        calculate(e.target);
      }
    } else if (e.target.classList.contains("btn-danger")) {
      e.target.closest(".offcanvas-body").remove(); // Elemanları tek tek siler
      // console.log(e.target);
      let titleRemove = e.target.closest(".card-body").querySelector(".card-title").textContent;
      // console.log(titleRemove);
      const result = data.find((item) => item.title == titleRemove);
      // console.log(result.id);
      addToBasketUpdate(data, result.id);
      calculate(e.target);
    }
  });
};

let sum = 0;
let quantity = 0;
export const calculate = (btn) => {
  const productPrice = btn.parentNode.parentNode
    .querySelector(".span-price")
    .textContent.split(" ")[0];
    // console.log(productPrice);

  quantity = btn.parentNode.querySelector("span").textContent;
  sum = Number(productPrice) * Number(quantity);
  // console.log(quantity);
  calculateAll();
};
export const calculateAll = () => {
  const allPrice = cartArea.querySelectorAll(".span-price");
  const allQuantities = cartArea.querySelectorAll(".quantity");
  // console.log(allQuantities);
  // console.log(allPrice);
  // console.log(allPrice[1].textContent);

  const totalPrice = [];
  allQuantities.forEach((item, i) => {
    const result = Number(
      (
        Number(item.textContent) * Number(allPrice[i].textContent.split(" ")[0])
      ).toFixed(2)
    );
    totalPrice.push(result);
    // console.log(totalPrice.length);
  });
  // console.log(totalPrice);
  const totalSum = totalPrice.reduce((acc, cur) => acc + cur, 0);
  // console.log(totalSum);

  hPrice.textContent = totalSum.toFixed(2);
  // console.log(hPrice);
  // console.log(hPrice.textContent);

  cartQuantity.textContent = totalPrice.length;
  // console.log(cartQuantity.textContent);
};
