import Swal from "sweetalert2";
import { sectionProducts, displayProducts } from "./src/displayProducts";
import { btnSection, displayButtons, showBtnCat } from "./src/displayButtons";
import { modalDetail } from "./src/modalDetail";
import { addToBasket } from "./src/addToBasket";
import { calculateProducts, cartFieldEvent } from "./src/calculate";

const searchInput = document.getElementById("searchInput");
// let productsList = [];
// let categoryList = [];

const URL = "https://anthonyfs.pythonanywhere.com/api/products/";

const cardItems = async () => {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    // productsList = data;
    //!------------------kategorilere ayırmak için-----------
    const productCategories = {
      all: data,
      ...data.reduce((item, currItem) => {
        const { category } = currItem;
        if (!item[category]) {
          item[category] = [];
        }
        item[category].push(currItem);
        return item;
      }, {}),
    };
    // console.log("cat", productCategories);
    showBtnCat(productCategories, data);
    search(productCategories);
    //!------------------butonların işlevlerini ayırmak için-----------
    sectionProducts.addEventListener("click", (e) => {
      const productId = e.target.id; // Tıklanan see detail butonu id'sini almak için
      if (e.target.classList.contains("btn-primary")) {
        // console.log(e.target, productId);
        const modalBody = document.querySelector(".modal-body");
        modalBody.textContent = ""; //? modalBody'nin her seferinde tek ürün detayı göstermesi için
        modalDetail(data, productId); // İlgili ürünün detayını görmek için

        // modalDetail(productId); // İlgili ürünün detayını görmek için
      } else if (e.target.classList.contains("btn-danger")) {
        addToBasket(data, productId);
        calculateProducts();
      }
    });

    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! ${error}`,
    });
  }
};

//!------------------Kategoriye göre arama yapmak için-----------
const search = (productCategories) => {
  const searchInput = document.querySelector("#searchInput");
  const categoryTitle = document.querySelector("#category");
  // console.log(categoryTitle);
  // console.log(categoryTitle.innerText.toLowerCase());
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.trim();
    sectionProducts.innerText = "";
    // categoryTitle.innerText = "";
    if (categoryTitle.innerText.toLowerCase() == "all") {
      displayProducts(
        productCategories["all"].filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      displayProducts(
        productCategories[
          categoryTitle.innerText.charAt(0).toUpperCase() +
            categoryTitle.innerText.slice(1).toLowerCase()
        ].filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  });
};

//!------------------DOMContentLoaded için-----------
document.addEventListener("DOMContentLoaded", async () => {
  const products = await cardItems();
  displayButtons();
  displayProducts(products);
  cartFieldEvent();
});
