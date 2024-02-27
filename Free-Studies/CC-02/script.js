// 1- Reverse Words in a String Without Arrays
// Write a JavaScript function called reverseWordsWithoutArray that takes a sentence as input and returns
// the sentence with its words reversed, without using arrays:
// This JavaScript code challenge involves reversing the words in a given sentence

// let sentence = prompt("Enter a sentence: ");
// let len = sentence.length;
// let i = 0;
// let str = "";
// let reverse = "";
// let result = "";
// for (i = len - 1; i >= 0; i--) {
//   if (sentence[i] !== " ") {
//     str += sentence[i];
//   } else {
//     for (let j = str.length - 1; j >= 0; j--) {
//       reverse += str[j];
//     }
//     result = result + reverse + " ";
//     str = "";
//     reverse = "";
//   }
// }

// for (let j = str.length - 1; j >= 0; j--) {
//   reverse += str[j];
// }
// result += reverse;
// console.log(result);

// 2- Write a JavaScript program that computes and prints the first n
// Fibonacci numbers without using any built-in functions (like Math.pow,
// Math.sqrt, Array methods, etc.) or arrays.

// function fibonacci(num) {
//   let i = 0;
//   let num1 = 0;
//   let num2 = 1;
//   let num3 = 0;
//   for (i = 0; i <= num; i++) {
//     while (i < 2) {
//       console.log(i);
//       i++;
//     }
//     if (i === 2) {
//       continue;
//     }
//     num1 = num2 + num3;
//     num3 = num2;
//     num2 = num1;
//     console.log(num1);
//   }
// }
// let count = Number(prompt("How many fibonnacci numbers do you want to see? "));
// fibonacci(count);

//TeamWork-04 JS Questions
// 2. Sum of Array Elements Challenge
// Description:
// This is a simple JavaScript code challenge that involves finding the sum of elements in a given array. The
// challenge specifically asks for the use of the for...of loop to achieve the solution. The function
// (toplamBul()) takes an array of numbers as input and returns the sum of its elements.
// function toplamBul(arr){
//     let topla=0;
//     for (let sayi of arr) {
//         topla+=sayi;
//     }
//     return topla;
// }
// const numbers = [1, 2, 3, 4, 5];
// const result = toplamBul(numbers);
// console.log("Sum of Array Elements:", result);
//2nd solution
// function toplamBul(arr){
//   let topla=0;
//   topla = arr.reduce((toplam,sayi) => toplam+sayi);
//   return topla;
// }
// const numbers = [1, 2, 3, 4, 5];
// const result = toplamBul(numbers);
// console.log("Sum of Array Elements:", result);

// 3. Filter Even Numbers Challenge
// Description:
// This JavaScript code challenge involves filtering even numbers from a given array. The challenge is to
// implement a function (filterEvenNumbers()) using the for...of loop to iterate through the array and return a
// new array containing only the even numbers.
// function filterEvenNumbers(arr) {
//   let result = [];
//   result += arr.filter((i) => i % 2 == 0);
//   return result;
// }

// const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = filterEvenNumbers(inputNumbers);
// console.log("Even Numbers:", result);
