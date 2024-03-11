const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");

containerDiv.style.display = "none";
setTimeout(() => {
  loadingDiv.style.display = "none";
  containerDiv.style.display = "block";
}, 3000);

const request = () => {
  let url = "https://api.thecatapi.com/v1/images/search?limit=10";
  fetch(url)
    .then((res) => {
      // console.log(res);
      if (!res.ok) {
        throw new Error(`Something went wrong ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      displayCats(data);
    })
    .catch((err) => displayError(err));
};

btn.addEventListener("click", () => {
  cardDiv.textContent = "";
  // loadingDiv.style.display = "none";
  request();
});

function displayCats(data) {
  setInterval(() => {
    tarih.textContent = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  }, 1000);

  data.forEach((cat) => {
    const img = document.createElement("img");
    img.src = cat.url;
    img.classList.add("w-100", "h-100");
    const div = document.createElement("div");
    div.classList.add("col-12", "col-sm-6", "col-lg-4");
    const divInner = document.createElement("div");
    divInner.classList.add("cat-div");
    divInner.appendChild(img);
    div.appendChild(divInner);
    cardDiv.appendChild(div);
  });
  loadingDiv.style.display = "none";
}

const displayError = (err) => {
  loadingDiv.style.display = "none";
  btn.style.display = "none";
  const img = document.createElement("img");
  img.src = "./img/error.gif";
  img.alt = err;
  img.style = "width: 100%; height: 100%";
  document.querySelector("body").appendChild(img);
};
