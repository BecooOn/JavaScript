import Swal from "sweetalert2";

const displayCoins = (coin) => {
  // console.log(coin);

  const { name, price, symbol, iconUrl, change, rank } = coin;
  const ul = document.querySelector(".coins");
  let h2DataName = ul.querySelectorAll(".coin-name[data-name]");
  const control = Array.from(h2DataName).some((item) => {
    return item.dataset.name === coin.name; // dataset özelliği, name'e erişmek için
  });
  if (control) {
    Swal.fire({
      title: "OOPS!",
      text: `${name} already exists`,
      icon: "warning",
      confirmButtonText: "OK",
    });
  } else {
    const coinList = document.createElement("li");
    coinList.classList.add("coin");
    const divRemove = document.createElement("div");
    divRemove.className = "remove-icon";
    const iTag = document.createElement("i");
    iTag.classList.add("fas", "fa-window-close");
    iTag.addEventListener("click", () => {
      ul.removeChild(coinList);
    });
    const h2 = document.createElement("h2");
    h2.className = "coin-name";
    h2.setAttribute("data-name", name);
    const h2Span = document.createElement("span");
    h2Span.textContent = `${name}`;
    const h2Sup = document.createElement("sup");
    h2Sup.textContent = `${symbol}`;
    const divPrice = document.createElement("div");
    divPrice.className = "coin-temp";
    divPrice.textContent = `${
      Number(price) >= 0 && Number(price) < 1 ? Number(price).toFixed(7) : Number(price).toFixed(2)
    }$`;
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.classList.add("coin-icon");
    img.src = iconUrl;
    const figCaption = document.createElement("figcaption");
    const iFig = document.createElement("i");
    iFig.classList.add("fa-solid", "fa-chart-line");
    iFig.style.color = `${change < 0 ? "red" : "green"}`;
    const changeSpan = document.createElement("span");
    changeSpan.style.color = `${change < 0 ? "red" : "green"}`;
    changeSpan.textContent = `${change || 0}`;
    changeSpan.style.marginLeft = "0.5rem";
    const rankSpan = document.createElement("span");
    rankSpan.style.marginLeft = "0.5rem";
    rankSpan.textContent = `Rank:${rank}`;

    ul.appendChild(coinList);
    coinList.appendChild(divRemove);
    divRemove.appendChild(iTag);
    coinList.appendChild(h2);
    h2.appendChild(h2Span);
    h2.appendChild(h2Sup);
    coinList.appendChild(divPrice);
    coinList.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figCaption);
    figCaption.appendChild(iFig);
    figCaption.appendChild(changeSpan);
    figCaption.appendChild(rankSpan);
  }
};

export default displayCoins;
