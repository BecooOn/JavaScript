import Swal from 'sweetalert2'
import "./scss/style.scss";
import {getCoins} from "./src/getCoins.js"

const form = document.querySelector("header form");
// console.log(form);
const input = document.querySelector("header form input");
// console.log(input);
form.addEventListener("submit", (e)=>{
  e.preventDefault(); //? submit özelliğinden kaynaklı varsayılan özellikleri iptal ettim.
  // console.log(input.value);
  if(input.value.trim() === ""){
    Swal.fire({
      title: 'Error!',
      text: 'Enter a coin name',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  } else {
    getCoins(input.value); //? input değerine göre istek yapmak için
  }
  e.target.reset(); //? formun submit sonrası inputun degerini sıfırladım.
})