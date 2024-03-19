export const sectionProducts = document.getElementById("products");
// console.log(btns);

export const displayProducts = (products) => {
  products.forEach((item) => {
    const { title, description, price, image } = item;
    const divCol = document.createElement("div");
    divCol.classList.add("col");

    const divCard = document.createElement("div");
    divCard.classList.add("card");
    const images = document.createElement("img");
    images.src = image;
    images.classList.add("p-2");
    images.style = " width:100%; height:300px;";
    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    const h5 = document.createElement("h5");
    h5.classList.add("card-title", "line-clamp-1");
    h5.textContent = title;
    const p = document.createElement("p");
    p.classList.add("card-text", "line-clamp-3");
    p.textContent =
      description.length < 50 ? description : description.slice(0, 70) + "...";
    const divPrice = document.createElement("div");
    divPrice.classList.add(
      "card-footer",
      "w-100",
      "fw-bold",
      "d-flex",
      "justify-content-between",
      "gap-3"
    );
    const span = document.createElement("span");
    const span1 = document.createElement("span");
    span1.classList.add("span-price");
    span.textContent = "Price:";
    span1.textContent = price + " $";
    const divButtons = document.createElement("div");
    divButtons.classList.add(
      "card-footer",
      "w-100",
      "d-flex",
      "justify-content-center",
      "gap-3"
    );

    const btnDanger = document.createElement("button");
    btnDanger.classList.add("btn", "btn-danger");
    btnDanger.id = `${item.id}`;
    // console.log(btnDanger.id);
    btnDanger.textContent = "Add";
    btnDanger.style = "width: 100px; cursor:pointer;";
    btnDanger.addEventListener("click", (e) => {
      // console.log(e.target);
      // addToCart(e.target);
    });

    const btnPrimary = document.createElement("button");
    btnPrimary.classList.add("btn", "btn-primary");
    btnPrimary.id = `${item.id}`;
    // console.log(btnPrimary.id);
    btnPrimary.setAttribute("data-bs-toggle", "modal");
    btnPrimary.setAttribute("data-bs-target", "#exampleModal");
    btnPrimary.textContent = "Detail";
    btnPrimary.style = "width: 100px; cursor:pointer;";
    btnPrimary.addEventListener("click", (e) => {
      // console.log(e.target);
      // seeDetails(e.target);
    });

    divCard.appendChild(images);
    divPrice.appendChild(span);
    divPrice.appendChild(span1);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);
    divCardBody.appendChild(divPrice);
    divCardBody.appendChild(divButtons);
    divCard.appendChild(divCardBody);
    divPrice.appendChild(span);
    divPrice.appendChild(span1);
    divButtons.appendChild(btnDanger);
    divButtons.appendChild(btnPrimary);

    divCol.appendChild(divCard);
    sectionProducts.appendChild(divCol);
  });
};
