import { sectionProducts, displayProducts } from "./displayProducts";

export const btnSection = document.getElementById("btns");
const categoryTitle = document.getElementById("category");
// console.log(categoryTitle.innerText);
// console.log(btnSection);
export const displayButtons = () => {
  const btnAll = document.createElement("button");
  btnAll.classList.add("btn", "btn-primary");
  btnAll.innerText = "ALL";
  btnAll.style.width = "120px";

  const btnElc = document.createElement("button");
  btnElc.classList.add("btn", "btn-primary");
  btnElc.innerText = "ELECTRONICS";
  btnElc.style.width = "120px";

  const btnSprt = document.createElement("button");
  btnSprt.classList.add("btn", "btn-primary");
  btnSprt.innerText = "SPORTS";
  btnSprt.style.width = "120px";

  const btnHome = document.createElement("button");
  btnHome.classList.add("btn", "btn-primary");
  btnHome.innerText = "HOME";
  btnHome.style.width = "120px";

  const btnShop = document.createElement("button");
  btnShop.classList.add("btn", "btn-primary");
  btnShop.innerText = "SHOP";
  btnShop.style.width = "120px";

  const btnClth = document.createElement("button");
  btnClth.classList.add("btn", "btn-primary");
  btnClth.innerText = "CLOTHING";
  btnClth.style.width = "120px";

  btnSection.appendChild(btnAll);
  btnSection.appendChild(btnElc);
  btnSection.appendChild(btnSprt);
  btnSection.appendChild(btnHome);
  btnSection.appendChild(btnShop);
  btnSection.appendChild(btnClth);
};

export const showBtnCat = (productCategories, data) => {
  btnSection.addEventListener("click", (e) => {
    if (e.target.innerText !== "ALL") {
      sectionProducts.innerText = "";
      categoryTitle.innerText = e.target.innerText;
      displayProducts(
        productCategories[
          e.target.innerText.charAt(0).toUpperCase() +
            e.target.innerText.slice(1).toLowerCase()
        ]
      );
      //   console.log(productCategories.Sports);
    } else {
      categoryTitle.innerText = e.target.innerText;
      sectionProducts.innerText = "";
      displayProducts(data);
    }
  });
};
