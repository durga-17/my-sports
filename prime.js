const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", function (input) {
  let number = Number(input);
  let isPrime = true;

  if (number <= 1) {
    isPrime = false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(number + " is a Prime number");
  }
  if (!isPrime) {
    console.log(number + " is NOT a Prime number");
  }

  rl.close();
});
