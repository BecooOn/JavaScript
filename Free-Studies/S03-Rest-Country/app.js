const countries = document.querySelector("#ulkeler");
const flag = document.querySelector(".flag");
const nameSpan = document.querySelector(".nameSpan");
const capitalSpan = document.querySelector(".capitalSpan");
const populationSpan = document.querySelector(".populationSpan");
const regionSpan = document.querySelector(".regionSpan");
const google = document.querySelector("#mapConnect");
const show = document.querySelector(".show");

const getCountry = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok) {
      throw new Error(`Something went wrong ${res.status}`);
    }
    const data = await res.json();
    // return data;
    countryFunc(data);
  } catch (error) {
    const img = document.createElement("img");
    img.src = "./img/404.png";
    img.alt = "error";
    document.querySelector("body").appendChild(img);
  }
};
let countryData;
const countryFunc = (country) => {
  country.sort((a, b) => a.name.common.localeCompare(b.name.common));
  countryData = country;
  country.map((item) => {
    const option = document.createElement("option");
    option.value = item.name.common;
    option.textContent = `${item.name.common}`;
    countries.append(option);
  });
};
const displayCountryInfo = (selectedCountry) => {
  flag.setAttribute("src", selectedCountry.flags.png);
  nameSpan.textContent = `${selectedCountry.name.common}`;
  capitalSpan.textContent = `${selectedCountry.capital}`;
  populationSpan.textContent = `${selectedCountry.population}`;
  regionSpan.textContent = `${selectedCountry.region}`;
  google.setAttribute("href", selectedCountry.maps.googleMaps);
  countries.style.display = "block";
  show.style.display = "flex";
};

getCountry();

countries.addEventListener("change",() => {
  const selectedCountryName = countries.value;
  const selectedCountry = countryData.find(
    (item) => item.name.common === selectedCountryName
  );
  displayCountryInfo(selectedCountry);
});
