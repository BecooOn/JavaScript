const kaydet = document.querySelector(".btn-kaydet");
const ekle = document.querySelector(".btn-ekle");
const temizle = document.querySelector(".btn-temizle");
const gelir = document.querySelector("#gelir");
const giderler = document.querySelector("#harcama");
const aciklama = document.querySelector("#harcama-aciklama-input");
const sonucGelir = document.querySelector(".sonuc-gelir");
const sonucGider = document.querySelector(".sonuc-gider");
const sonucKalan = document.querySelector(".sonuc-kalan");
const tabloFormu = document.querySelector(".tablo-formu");
let toplamGelir = 0;
let toplamGiderler = 0;
let kalan = 0;
let harcamaListesi = [];
let harcamaObject = {};

//!Tümünü silmek için
temizle.addEventListener("click", () => {
  if (confirm("Tümü silmek istediginizden emin misiniz?")) {
    document.querySelector("#tarih").value = "";
    document.querySelector("#harcama").value = "";
    document.querySelector("#harcama-aciklama-input").value = "";
    document.querySelector("#gelir").value = "";
    document.querySelector(".sonuc-gelir").textContent = "0";
    document.querySelector(".sonuc-gider").textContent = "0";
    document.querySelector(".sonuc-kalan").textContent = "0";
    document.querySelector(".tablo-formu").firstElementChild.remove();
    // document.querySelector(".hasilat").firstElementChild.remove();
  }
});

//!Tabloya kaydetmek için
kaydet.addEventListener("click", () => {
  const tableElement = document.querySelector(".table");
  // Eğer tablo varsa sadece tbody içeriğini güncellemek için
  if (tableElement) {
    if (
      document.querySelector("#tarih").value === "" ||
      document.querySelector("#harcama").value === "" ||
      document.querySelector("#harcama-aciklama-input").value === ""
    ) {
      alert("Lütfen bu alanları doldurunuz");
    } else {
      // tbody içeriğini güncellemek için
      updateTableBody(tableElement);
    }
  } else {
    if (
      document.querySelector("#tarih").value === "" ||
      document.querySelector("#harcama").value === "" ||
      document.querySelector("#harcama-aciklama-input").value === ""
    ) {
      alert("Lütfen bu alanları doldurunuz");
    } else {
      // Tablo yoksa yeni bir tablo oluşturmak için
      createTable();
    }
  }
  // localStorage.setItem("Harcamalar", JSON.stringify(harcamaListesi));
  // console.log(harcamaListesi);
  hesaplaGuncelle();

  document.querySelector("#harcama").value = "";
  document.querySelector("#harcama-aciklama-input").value = "";
});

function createTable() {
  // Tablo oluştur
  const formTablo = document.createElement("table");
  formTablo.classList.add("table");

  // Başlık (thead) oluştur
  const thead = formTablo.createTHead();
  thead.classList.add("table-thead");
  const theadRow = thead.insertRow();
  let arr = ["Tarih", "Harcama Açıklaması", "Harcanan Para", "İşlem"];
  for (let i = 0; i < arr.length; i++) {
    let thText = document.createTextNode(arr[i]);
    let cellTH = document.createElement("th");
    cellTH.appendChild(thText);
    theadRow.appendChild(cellTH);
  }

  // Tablo gövdesi (tbody) oluştur
  const tbody = document.createElement("tbody");
  tbody.classList.add("table-tbody");

  // Satır oluşturmak ve verileri hücrelere eklemek için
  const tbRow = tbody.insertRow();
  let tarih = document.querySelector("#tarih").value;
  let harcama = document.querySelector("#harcama").value;
  let aciklama = document.querySelector("#harcama-aciklama-input").value;

  let tbCell = tbRow.insertCell();
  let tbContent = document.createTextNode(tarih);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode(aciklama);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode(harcama);
  tbCell.appendChild(tbContent);

  harcamaObject = {
    tarih: document.querySelector("#tarih").value,
    harcama: document.querySelector("#harcama").value,
    aciklama: document.querySelector("#harcama-aciklama-input").value,
    id: new Date().getTime(),
  };
  harcamaListesi.push(harcamaObject);

  const createLastTd = () => {
    const td = document.createElement("td");
    td.classList.add("delete");
    td.textContent = "🗑";
    td.id = harcamaObject.id;
    td.setAttribute("type", "button");
    td.style = "border:none; cursor:pointer";
    // td.append(td.textContent);
    return td;
  };

  tbCell = tbRow.insertCell();
  tbCell.appendChild(createLastTd());

  // Tablo formuna eklemek için
  formTablo.appendChild(tbody);
  document.querySelector(".tablo-formu").appendChild(formTablo);
}

function updateTableBody(tableElement) {
  // Satır oluşturmak ve verileri hücrelere eklemek için
  const tbody = tableElement.querySelector("tbody");
  let tarih = document.querySelector("#tarih").value;
  let harcama = document.querySelector("#harcama").value;
  let aciklama = document.querySelector("#harcama-aciklama-input").value;

  const tbRow = tbody.insertRow();
  let tbCell = tbRow.insertCell();
  let tbContent = document.createTextNode(tarih);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode(aciklama);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode(harcama);
  tbCell.appendChild(tbContent);

  harcamaObject = {
    tarih: document.querySelector("#tarih").value,
    harcama: document.querySelector("#harcama").value,
    aciklama: document.querySelector("#harcama-aciklama-input").value,
    id: new Date().getTime(),
  };
  harcamaListesi.push(harcamaObject);

  const createLastTd = () => {
    const td = document.createElement("td");
    td.textContent = "🗑";
    td.classList.add("delete");
    td.id = harcamaObject.id;
    td.setAttribute("type", "button");
    td.style = "border:none; cursor:pointer";
    // td.append(td.textContent);
    return td;
  };

  tbCell = tbRow.insertCell();
  tbCell.appendChild(createLastTd());
}

//? Gelir eklemek için
ekle.addEventListener("click", () => {
  if (document.querySelector("#gelir").value === "") {
    alert("Lütfen bu alanları doldurunuz");
  } else {
    toplamGelir += Number(gelir.value);
    // console.log(toplamGelir);
  }
  hesaplaGuncelle();
  gelir.value = "";
  // localStorage.setItem("gelir", toplamGelir);
  // localStorage.clear();
});

const hesaplaGuncelle = () => {
  const giderlerToplami = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.harcama),
    0
  );
  document.querySelector(".sonuc-gelir").textContent = toplamGelir;
  document.querySelector(".sonuc-gider").textContent = giderlerToplami;
  sonucKalan.textContent = toplamGelir - giderlerToplami;
  // console.log(giderTolami);
};

tabloFormu.addEventListener("click", (e) => {
  // const tableElement = document.querySelector(".table");
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
    const itemId = parseInt(e.target.id);
    harcamaListesi = harcamaListesi.filter((harcama) => harcama.id !== itemId);
    hesaplaGuncelle();

    // console.log(harcamaListesi);
    // localStorage.setItem("harcamaListesi", JSON.stringify(harcamaListesi));
  }
  //  else if(e.target.classList.contains("delete") && harcamaListesi.length === 1){
  //   sonucKalan.textContent = toplamGelir;
  //   console.log(harcamaListesi.length);
  // }
});

//! Tarih değerini sayfanın yüklenmesi ile birlikte ekranda görmek için
window.addEventListener("load", () => {
  hesaplaGuncelle();
  // document.querySelector("#tarih").value = new Date().toISOString().split('T')[0];  // Tarihi alıp inputa yazdırıyoruz. Birinci yol
  document.querySelector("#tarih").valueAsDate = new Date(); // Tarihi alıp inputa yazdırıyoruz. İkinci yol

  // harcamaListesi = JSON.parse(localStorage.getItem("harcamaListesi")) || []; // Verileri local storage'dan çekiyoruz. Local storage'da yoksa bos bir dizi oluşturuyoruz.
  // harcamaListesi.forEach((harcama) => {
  // createTableBody(harcama);
  // topluHesaplama(harcama);
  // })

  toplamGelir = localStorage.getItem("gelirler") || 0;
  sonucGelir.textContent = toplamGelir;

  toplamGiderler = localStorage.getItem("giderler") || 0;
  sonucGider.textContent = toplamGiderler;

  kalan = localStorage.getItem("kalan") || 0;
  sonucKalan.textContent = kalan;
});
