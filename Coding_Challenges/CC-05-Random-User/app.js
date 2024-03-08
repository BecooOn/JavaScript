// const btn = document.getElementById("btn");
// const img = document.querySelector(".image");
// const name = document.querySelector(".name");
// const email = document.querySelector(".email");
// const phone = document.querySelector(".phone");

// btn.addEventListener("click", () => {
//   fetch("https://randomuser.me/api")
//     .then((res) => res.json())
//     .then((data) => {
//       users(data);
//     })
//     .catch((err) => showError(err));
// });

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

//!promise çözümü
// const btn = document.getElementById("btn");
// const img = document.querySelector(".image");
// const name = document.querySelector(".name");
// const email = document.querySelector(".email");
// const phone = document.querySelector(".phone");
// btn.addEventListener("click", () => {
//   getUsers()
//     .then((data) => {
//       users(data);
//     })
//     .catch((err) => {
//       showError(err);
//     })
//     .finally(() => {
//       console.log("Islem tamamlandi");
//     });
// });

// const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     const promise = new XMLHttpRequest();
//     promise.open("GET", "https://randomuser.me/api");
//     promise.onload = function () {
//       if (promise.status === 200) {
//         resolve(JSON.parse(promise.responseText));
//       } else {
//         reject(new Error("Network response was not ok"));
//       }
//     };
//     promise.onerror = function () {
//       reject(new Error("Request failed"));
//     };
//     promise.send();
//   });
// };

//?promise yorum
// -Dügmeye bir olay dinleyici ekleniyor, tikladigimizda getUsersi cagiriyoruz
// -getUsers XMLHTTPREQUEST kullanarak randomuser.me/api adresine get istegi gonderiyoruz dondurelen veriyi iceren veri dondurur. İstek basariliysa yanit JSON'a donusturulur aksi takdirde hata iletisi olur
// -users islevi API'den alinan verileri isler kullanici bilgilerini cikarir ve html ogelerini buna gore gunceller
// -showError islevi bir hata durumunda gosterilecek /img/404.png gorseli ile hata mesaji goruntuler