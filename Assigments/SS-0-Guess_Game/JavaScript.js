let rnd = Math.round(Math.random() * 100);
alert("Let's play the guessing game!");
let right = Number(prompt("How many rights do you want to have? Enter it! : "));
let temp = right;
let guess = 0;

for (let i = 1; i <= right; i++) {
  guess = Number(prompt("Enter your guess between 0-100: "));
  if (isNaN(guess) && temp > 1) {
    alert(
      ` Invalid input. You have ${--temp} right for guessing. Try it again!`
    );
  } else {
    if (guess < rnd && temp > 1) {
      alert(
        `Little higher! CAUTION: You have ${--temp} right for guessing. Try it again!`
      );
    } else if (rnd < guess && temp > 1) {
      alert(
        `Little lower! CAUTION: You have ${--temp} right for guessing. Try it again!`
      );
    } else if (guess === rnd) {
      alert(
        `Congratulation! You are right! Random number was ${rnd}. Your grade is: ${
          100 - (right - (temp - 1)) * (100 / right)
        }`
      );
      break;
    } else {
      break;
    }
  }
}
if (guess !== rnd) {
  alert("You don't have any right to guess! Game over!");
  alert(`Answer was: ${rnd}`);
  alert(`Your grade is: ${100 - (right - (temp - 1)) * (100 / right)}`);
}