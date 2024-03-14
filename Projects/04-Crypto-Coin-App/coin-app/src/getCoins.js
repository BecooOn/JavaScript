import Swal from 'sweetalert2'
import displayCoins from './displayCoins';

export const getCoins = async (coinName) => {
  const BASE_URL = `https://api.coinranking.com/v2/coins?search=${coinName}`;
  const API_KEY = "coinranking734f14b6d044ed7b30d43d513756abfe54db3b39dc88ddc2";
  const options = {
    headers: {
      "x-access-token": API_KEY,
    },
  };
  try {
    const response = await fetch(BASE_URL, options);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    // console.log(response);
    const resolve = await response.json();
    // console.log(resolve);
    displayCoins(resolve.data.coins[0]);
    // console.log(resolve.data.coins[0]); //? içerisinde birçok coin olduğu için ve undefined sonuç almamak için ihtiyacımız olan ilk index verisini almış oldum.
  } catch (error) {
    Swal.fire({
        title: "No connection with API!",
        text: `Check your internet connection and try again ${error}`,
        icon: "warning",
        // icon: "question"
      });
  }
};
