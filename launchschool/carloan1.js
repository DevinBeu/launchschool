const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}
prompt("Welcome to Mortgage Calculator");

while (true) {
  prompt("-----------------------------");

  prompt("What is the loan amount?");
  let amount = readline.question();

  prompt("What is the interest rate?");
  let interestRate = readline.question();

  prompt("Whats' the loan duration, in years?");
  let years = readline.question();
}
