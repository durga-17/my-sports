// calculator.js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter first number: ", num1 => {
  readline.question("Enter second number: ", num2 => {
    console.log(`${num1} + ${num2} = ${parseFloat(num1) + parseFloat(num2)}`);
    console.log(`${num1} - ${num2} = ${parseFloat(num1) - parseFloat(num2)}`);
    console.log(`${num1} * ${num2} = ${parseFloat(num1) * parseFloat(num2)}`);
    console.log(`${num1} / ${num2} = ${parseFloat(num1) / parseFloat(num2)}`);
    readline.close();
  });
});
