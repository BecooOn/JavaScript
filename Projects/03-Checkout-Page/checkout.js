const deleteAll = document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector(".products");
// const productPrice = document.querySelector("#product-price");
// console.log(productPrice.textContent);
// console.log(products.querySelectorAll(".product").length);

//?Sabit değerler
const FREE_SHIPPING_LIMIT = 3000;
const SHIPPING_PRICE = 25.99;
const TAX_RATE = 0.18;

//? tüm ürünleri ve fiyatları silmek için
deleteAll.addEventListener("click", () => {
  products.textContent = "No Product";
  products.classList.add("no-product");
  calculateTotal();
});

//? ürünler miktarlarını arttırıp azaltmak veya silmek için

products.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.textContent++; // Tüm elemanların ayrı ayrı eleman sayısını arttırır
    // document.querySelector("#quantity").textContent++; Sadece ilk elemanın ürün sayısını arttırır.
    calculate(e.target);
  } else if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.textContent > 1) {
      e.target.nextElementSibling.textContent--; // Tüm elemanların ayrı ayrı eleman sayısını azltır
      // document.querySelector("#quantity").textContent--; Sadece ilk elemanın ürün sayısını azaltır.
      calculate(e.target);
    }
  } else if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest(".product").remove(); // Elemanları tek tek siler
    // console.log(products.querySelectorAll(".product").length); NodeList olarak productları aldık ve uzunluğunu hesapladık.
    if (products.querySelectorAll(".product").length === 0) {
      products.textContent = "No Product";
      products.classList.add("no-product");
    }
    calculate(e.target);
  }
});

//? Adet sayısına göre ürün fiyatını hesaplamak için
const calculate = (btn) => {
  const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price");
  let discount = btn
    .closest(".product-info")
    .querySelector("#discounted-price").textContent;
  let qauntity = btn.parentNode.querySelector("#quantity").textContent;
  // console.log(productPrice);
  productPrice.textContent = (discount * qauntity).toFixed(2);
  calculateTotal();
};

const calculateTotal = () => {
  const prices = document.querySelectorAll("#product-price");
  const sum = [...prices].reduce(
    (acc, cur) => acc + Number(cur.textContent),
    0
  );
  const shipping =
    sum >= FREE_SHIPPING_LIMIT || sum === 0 ? 0.0 : SHIPPING_PRICE;
  const tax = sum * TAX_RATE;
  const total = sum + shipping + tax;
  const selectedprice = sum;
  document.querySelector("#total").textContent = total.toFixed(2);
  document.querySelector("#shipping").textContent = shipping.toFixed(2);
  document.querySelector("#tax").textContent = tax.toFixed(2);
  document.querySelector("#selected-price").textContent =
    selectedprice.toFixed(2);
};

window.addEventListener('load', () =>{
  calculateTotal();
})