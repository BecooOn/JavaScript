const btn = document.querySelector("#btn");
const img = document.querySelector(".img");
const isim = document.querySelector(".isim");
const imgSrc = document.querySelector("#img-src");
// const count = document.querySelector(".count");
// const countDown = document.querySelector("#countDown");
const modal = document.getElementById("myModal");
const modalVideo = document.querySelector(".modalVideo");
const spinSound = document.getElementById("spin");
const videoBtn = document.querySelector("#videoBtn");
const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const btnArea = document.querySelector("#btnArea");
const btnSkip = document.querySelector(".btnSkip");

let arr = [
  "QA124-ALİ MERT",
  "QB129-VEYSEL",
  "QA106-ZEYNEP",
  "QB135-ÖMER",
  "QB143-FARUK",
  "Q8161-SEDA",
  "QB127-SADIK",
  "QB121-AKMARAL",
  "Q9176-ENES",
  "QB114-YÜKSEL",
  "Q9136-BÜŞRA",
  "QB141-ERSİN",
  "QB117-GÜLŞAH",
  "Q5126-GÖKBERK",
  "Q5187-MUSTAFA",
  "QA175-CEREN",
  "QC101-ZAFER",
  "QA158-ADEM",
];
const imgObj = {
  QA124: "https://ca.slack-edge.com/T06BXPTNG1H-U06BZMJ6NRG-dccbd667afa4-512",
  QB129: "https://ca.slack-edge.com/T06BXPTNG1H-U06CNF0AB4Y-f447246ab24f-512",
  QA106: "https://ca.slack-edge.com/T06BXPTNG1H-U06CNF0339N-55e3d822a331-512",
  QB135: "https://ca.slack-edge.com/T06BXPTNG1H-U06CKL0J40J-c05b0cc96d25-512",
  QB143: "./img/QB143.jpg",
  Q8161: "https://ca.slack-edge.com/T06BXPTNG1H-U06C25CNXE0-203b2805b29f-512",
  QB127: "./img/QB127.jpg",
  QB121: "https://ca.slack-edge.com/T06BXPTNG1H-U06BZMHCG02-8069452f215a-512",
  Q9176: "./img/Q9176.jpg",
  QB114: "https://ca.slack-edge.com/T06BXPTNG1H-U06BK5LFNDD-35895782569c-512",
  Q9136: "https://ca.slack-edge.com/T06BXPTNG1H-U06BZMJ79DG-5f91ca6027a2-512",
  QB141: "./img/QB141.jpg",
  QB117: "https://ca.slack-edge.com/T06BXPTNG1H-U06CNF028AU-015f2045166b-512",
  Q5126: "https://ca.slack-edge.com/T06BXPTNG1H-U06BXQF6VBQ-7cd754a394c8-512",
  Q5187: "https://ca.slack-edge.com/T06BXPTNG1H-U06BPTAS2R5-e3d695199afa-512",
  QA175: "./img/QA175.jpg",
  QC101: "./img/QC101.jpg",
  QA158: "https://ca.slack-edge.com/T06BXPTNG1H-U06C0S2BFGB-32c50024b778-192",
};
let interval;
btn.addEventListener("click", () => {
  clearInterval(interval);
  modal.style.display = "flex";
  //   let startTime = new Date().getTime();
  interval = setInterval(() => {
    let index = Math.floor(Math.random() * arr.length);
    isim.textContent = arr[index];
    let kod = arr[index].split("-")[0];
    let resimURL = imgObj[kod];
    imgSrc.src = resimURL;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    let finalIndex = Math.floor(Math.random() * arr.length);
    isim.textContent = arr[finalIndex];
    let kod = arr[finalIndex].split("-")[0];
    let resimURL = imgObj[kod];
    imgSrc.src = resimURL;
    arr = arr.filter((item) => item !== arr[finalIndex]);

    if (arr.length == 0) {
      modal.style.display = "none";
      imgSrc.src = "";
      isim.style.display = "none";
      img.style.display = "none";
      btn.style.display = "none";
      //   btn.style.display = "none";
      //   count.style.display = "block";
      //   countDown.style.display = "block";
    }
    console.log(arr);
  }, 2000);
  setTimeout(() => {
    modal.style.display = "none";
  }, 4000);
  spinSound.play();
});

//!video için
videoBtn.addEventListener("click", () => {
  modalVideo.style.display = "flex";
  document.querySelector("#introVideo").play();
  setTimeout(() => {
    modalVideo.style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("question1").style.display = "block";
    document.getElementById("solution1").style.display = "none";
    btn.style.visibility = "visible";
    btnArea.style.visibility = "visible";
    nextBtn.style.visibility = "visible";
    previousBtn.style.visibility = "visible";
  }, 57000);
});
btnSkip.addEventListener("click", () => {
  modalVideo.style.display = "none";
  document.getElementById("home").style.display = "none";
  btn.style.visibility = "visible";
  btnArea.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  previousBtn.style.visibility = "visible";
  document.getElementById("question1").style.display = "block";
  document.querySelector(".skip").style.display = "none";
});
