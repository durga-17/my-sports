const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", function (input) {
  let number = Number(input);

  if (number % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }

  rl.close();
});
