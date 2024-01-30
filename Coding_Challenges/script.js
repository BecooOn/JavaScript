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
