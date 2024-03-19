import Swal from "sweetalert2";
let productIdArr = [];
let productTotal = [];
export const addToBasketUpdate = (data, updateId) => {
  // return updateProduct(data, updateId);
  let index = productIdArr.indexOf(updateId);
    productIdArr.splice(index, 1);
    console.log(productIdArr);
};
export const addToBasket = (data, productId) => {
  const canvas = document.querySelector(".offcanvas");
  // console.log(productIdArr);

  const result = data.find((item) => item.id == productId);
  const { id, title, image, price } = result;
  // console.log(id);

  if (productIdArr.includes(id)) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: `Something went wrong! You already added it`,
    });
  } else if (id == productId) {
    // Parent div
    const offcanvasBodyDiv = document.createElement("div");
    offcanvasBodyDiv.className = "offcanvas-body";

    // Card div
    const cardDiv = document.createElement("div");
    cardDiv.className = "card mb-3";
    cardDiv.style.maxWidth = "540px";

    // Row div
    const rowDiv = document.createElement("div");
    rowDiv.className = "row g-0";

    // Col-md-4 div for image
    const colDiv1 = document.createElement("div");
    colDiv1.className = "col-md-4 my-auto";

    // Image element
    const imgElement = document.createElement("img");
    imgElement.src = `${image}`;
    imgElement.className = "img-fluid rounded-start";
    imgElement.alt = `${title}`;

    // Col-md-8 div for card body
    const colDiv2 = document.createElement("div");
    colDiv2.className = "col-md-8";

    // Card body div
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    // Card title
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = `${title}`;

    // Div button
    const divButton = document.createElement("div");
    divButton.className = "d-flex align-items-center gap-2";
    divButton.setAttribute("role", "button");

    // Minus button
    const minusButton = document.createElement("i");
    minusButton.className =
      "fa-solid fa-minus border rounded-circle bg-danger text-white p-2";

    // Quantity text
    const quantityText = document.createElement("span");
    quantityText.classList.add("fw-bold", "quantity");
    quantityText.textContent = "1";

    // Plus button
    const plusButton = document.createElement("i");
    plusButton.className =
      "fa-solid fa-plus border bg-danger text-white rounded-circle p-2";

    //spanPrice
    const spanPrice = document.createElement("span");
    spanPrice.classList.add("fw-bold", "span-price");
    spanPrice.textContent = `${price} $`;

    //spanQuantity
    // const spanQuantity = document.createElement("span");
    // spanQuantity.className = "fw-bold";
    // spanQuantity.textContent = "1";

    // Total text
    const totalText = document.createElement("p");
    totalText.className = "card-text";
    totalText.textContent = `List Price: `;

    // Remove button
    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger";
    removeButton.textContent = "Remove";

    // Append elements
    offcanvasBodyDiv.appendChild(cardDiv);
    cardDiv.appendChild(rowDiv);
    rowDiv.appendChild(colDiv1);
    colDiv1.appendChild(imgElement);
    rowDiv.appendChild(colDiv2);
    colDiv2.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitle);
    divButton.appendChild(minusButton);
    divButton.appendChild(quantityText);
    divButton.appendChild(plusButton);
    cardBodyDiv.appendChild(divButton);
    // totalText.appendChild(spanQuantity);
    totalText.appendChild(spanPrice);
    cardBodyDiv.appendChild(totalText);
    cardBodyDiv.appendChild(removeButton);

    // Append parent div to document body or any other parent element
    canvas.appendChild(offcanvasBodyDiv);
    productIdArr.push(Number(productId));
    // console.log(productIdArr);
    productTotal.push(result);
  }

};