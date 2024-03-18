export const cartFieldEvent = () => {
  const cartField = document.querySelector("#offcanvasScrolling");

  cartField.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-plus")) {
      e.target.previousElementSibling.textContent++;
      e.target.closest(".card-body").querySelector("#cart-item-quantity")
        .textContent++;
      calculateProducts();
    } else if (e.target.classList.contains("fa-minus")) {
      if (e.target.nextElementSibling.textContent > 1) {
        e.target.nextElementSibling.textContent--;
        e.target.closest(".card-body").querySelector("#cart-item-quantity")
          .textContent--;
        calculateProducts();
      }
    } else if (e.target.id == "remove-btn") {
      const removedCartItems = cartItems.filter(
        (item) =>
          item.id != e.target.closest(".card").getAttribute("data-product-id")
      );
      setCartItems(removedCartItems);

      e.target.closest(".card").remove();
      console.log(cartItems);
      calculateProducts();
      getCartItemsCount();
    }

    saveData();
  });
};

export const calculateProducts = () => {
  const quantities = document.querySelectorAll("#cart-item-quantity");
  const prices = document.querySelectorAll("#cart-item-price");
  const totalPrices = [];
  quantities.forEach((item, i, array) => {
    const totalPrice = Number(
      (Number(item.textContent) * Number(prices[i].textContent)).toFixed(2)
    );
    totalPrices.push(totalPrice);
  });
  console.log(totalPrices);
  const totalPrice = totalPrices.reduce((sum, item) => sum + item, 0);
  const totalPriceElement = document.querySelector("#total-price");
  totalPriceElement.textContent = totalPrice.toFixed(2) + " $";
};
