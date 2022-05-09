// Write a program that prompts the user for two positive
// integers, and then prints the results of the following operations
// on those two numbers: addition, subtraction,
// product, quotient, remainder, and power. Do not worry
// about validating the input.

// Example

// Copy Code
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

let rlsy = require("readline-sync");
let rls = require("readline-sync");

function prompt(msg) {
  console.log(`==>${msg}`);
}
prompt("Enter the first number:");
let number1 = rlsy.question();

prompt("Enter the second number:");
let number2 = rlsy.question();

prompt(`${number1} + ${number2} = ${number2} = ${number1 + number2}`);
prompt(`${number1} - ${number2} = ${number2} = ${number1 - number2}`);
prompt(`${number1} * ${number2} = ${number2} = ${number1 * number2}`);
prompt(`${number1} / ${number2} = ${number2} = ${number1 / number2}`);
prompt(`${number1} % ${number2} = ${number2} = ${number1 % number2}`);
prompt(`${number1} **${number2} = ${number2} = ${number1 ** number2}`);
