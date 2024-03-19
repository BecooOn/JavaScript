import { addToBasket } from "./addToBasket";
export const modalDetail = (data, productId) => {
  data.forEach((item) => {
    const { id, title, image, description, price } = item;
    if (id == productId) {
      const exampleModal = document.getElementById("exampleModalLabel");
      const modalBody = document.querySelector(".modal-body");
      exampleModal.textContent = `${title}`;

      const divText = document.createElement("div");
      divText.classList.add("text-center");
      const img = document.createElement("img");
      img.classList.add("p-2");
      img.src = `${image}`;
      img.style.height = "250px";
      img.setAttribute("alt", `${title}`);
      const divCardBody = document.createElement("div");
      divCardBody.classList.add("card-body", "my-3");
      const h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.textContent = `${title}`;
      const p = document.createElement("p");
      p.classList.add("card-text");
      p.textContent = `${description}`;
      const divPrice = document.createElement("div");
      divPrice.classList.add(
        "w-100",
        "fw-bold",
        "d-flex",
        "justify-content-center",
        "gap-3"
      );
      const span = document.createElement("span");
      span.textContent = "Price: ";
      const span1 = document.createElement("span");
      span1.textContent = `${price} $`;
      divPrice.append(span, span1);

      const btnDanger = document.createElement("button");
      btnDanger.classList.add("btn", "btn-danger");
      btnDanger.id = `${item.id}`;
      btnDanger.textContent = "Add";
      btnDanger.style = "width: 100px; cursor:pointer; margin: 0.5rem;";

      divText.appendChild(img);
      divText.appendChild(divCardBody);
      divCardBody.append(h5, p, divPrice,btnDanger);
      modalBody.appendChild(divText);
      btnDanger.addEventListener("click", () => {
        addToBasket(data, id);
      });
    } else {
      return;
    }
  });
  // exampleModal.textContent = "";
  // modalBody.textContent = "";
};
