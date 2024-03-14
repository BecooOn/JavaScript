const getBtn = document.getElementById("button");

const cardsDiv = document.getElementById("cards");
// console.log(cardsDiv);
const searchInput = document.getElementById("searchFollowers");

const listGroup = document.querySelectorAll(".list-group");
const listItems = document.querySelectorAll(".list-group-item");

let followers = []; //! bu değişkeni daha sonra arama alanında kullanmak üzere globalde tanımladık. Bu dizinin içerisini getFollowers() fonksiyonunda fonksiyonuna gelen kullanıcı isimleriyle dolduracağız.

const getFollowers = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/followers?per_page=100`
    );
    // console.log(response);
    if (response.ok) {
      const data = await response.json();
      followers = data;
      //   followers.length > 0 ? searchInput.style.display = "block" : alert('User not found');
      if (data.length > 0) {
        searchInput.style.display = "flex";
      }
      // console.log(data);
      data.forEach((item) => creatElem(item));
    } else {
      throw new Error("User wasn't found!");
    }
  } catch (error) {
    // console.log(error);
    searchInput.style.display = "none";
    iziToast.show({
      message: `${error}`,
      position: "topCenter",
      backgroundColor: "red",
      timeout: 3000,
    });
  }
};

const creatElem = (user) => {
  // console.log(user);
  // console.log(user.login);

  const { login, html_url, avatar_url } = user;
  console.log(avatar_url);

  const colDiv = document.createElement("div");
  colDiv.classList.add("col");
  const innerDiv = document.createElement("div");
  innerDiv.classList.add("card");
  const imgAvatar = document.createElement("img");
  imgAvatar.classList.add("card-img-top");
  imgAvatar.src = avatar_url;
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.textContent = login;
  const a = document.createElement("a");
  a.classList.add("btn", "btn-dark");
  a.setAttribute("href", html_url);
  a.textContent = "View Profile";
  cardBody.appendChild(h5);
  cardBody.appendChild(a);
  innerDiv.appendChild(imgAvatar);
  innerDiv.appendChild(cardBody);
  colDiv.appendChild(innerDiv);
  cardsDiv.append(colDiv);
};

getBtn.addEventListener("click", () => {
  cardsDiv.textContent = "";
  const value = document.querySelector("#searchText").value.trim();
  // console.log("içerik doğru mu",value);
  if (value) {
    getFollowers(value);
  } else {
    iziToast.show({
      //   title: "Başlık",
      message: "Enter or choose a username!",
      position: "topCenter", // "bottomRight", "bottomLeft", "topRight", "topLeft", "topCenter", "bottomCenter", "center"
      backgroundColor: "#5DADE2",
      timeout: 3000,
    });
  }
});

//? event ile anlık verileri yakalayabiliriz; ancak listener olarak "input" özelliğinden dolayı zaten anlık verileri yakalayabiliriz, yani event kullansakta olur kullanmasakta olur..
 //! anlık değerleri yakalayıp yakalamadığnı görmek için kontrol
// })
searchInput.addEventListener("input", (e) => {
  // console.log(e.target.value); //! anlık değerleri yakalayıp yakalamadığını görmek için kontrol
  cardsDiv.textContent = ""; //? sadece arama sonucu ekranda kalsın diye bu yapılmalıdır

  e.target.value
    ? followers
        .filter((item) =>
          item.login.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .forEach((item) => creatElem(item))
    : followers.forEach((item) => creatElem(item));
});

window.addEventListener("load", () => {
  searchInput.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let username = e.target.textContent.trim();
      document.querySelector("#searchText").value = username;
      getFollowers(username);
      item.parentNode.removeChild(item);
      cardsDiv.textContent = "";

    });
  });
  // console.log(listItems);
});