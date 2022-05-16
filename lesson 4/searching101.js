let readline = require("readline-sync");
let numbers = [];

console.log("Enter the first number:");
numbers.push(Number(readline.prompt()));
console.log("Enter the second number:");
numbers.push(Number(readline.prompt()));
console.log("Enter the third number:");
numbers.push(Number(readline.prompt()));
console.log("Enter the  fourth number:");
numbers.push(Number(readline.prompt()));
console.log("Enther the fifth number:");
numbers.push(Number(readline.prompt()));
console.log("Enter the last number:");
const lastNumber = Number(readline.prompt());

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers}`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers}.`);
}
