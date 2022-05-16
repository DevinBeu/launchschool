let readline = require("readline-sync");
console.log("What is your age?");
let age = readline.question();

console.log("At what age would you like to retire?");
let retireAge = readline.question();

let yearsToWork = Number(retireAge) - Number(age);
let retirementYear = Number(2022) + yearsToWork;
console.log(` It's 2022 . You will retire in ${retirementYear}. 
You only have ${yearsToWork} year of work to go!`);
