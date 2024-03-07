const btn = document.getElementById("btn");
const img = document.querySelector(".image");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      users(data);
    })
    .catch((err) => showError(err));
});

const users = (data) => {
  const user = data.results[0];
  img.src = user.picture.large;
  name.textContent = user.name.first + " " + user.name.last;
  email.textContent = user.email;
  phone.textContent = user.phone;
};
const showError = (err) => {
  img.src = "./img/404.png";
};
