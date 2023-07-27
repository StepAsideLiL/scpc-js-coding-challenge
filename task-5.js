// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your equation (Example: 12+8): ", (str) => {
  if (str.includes("+")) {
    const [x, y] = str.split("+");
    console.log(`Result = ${parseFloat(x) + parseFloat(y)}`);
  }

  if (str.includes("-")) {
    const [x, y] = str.split("-");
    console.log(`Result = ${parseFloat(x) - parseFloat(y)}`);
  }

  if (str.includes("*")) {
    const [x, y] = str.split("*");
    console.log(`Result = ${parseFloat(x) * parseFloat(y)}`);
  }

  if (str.includes("/")) {
    const [x, y] = str.split("/");
    console.log(`Result = ${parseFloat(x) / parseFloat(y)}`);
  }

  rl.close();
});
