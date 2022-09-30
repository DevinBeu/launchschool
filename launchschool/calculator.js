const readline = require("readline-sync")

function prompt(msg) {
    console.log(`=> ${msg}`)
}

prompt('Welcome to the calculator!')
prompt(" What is the first number?")
let number1 = readline.question();
prompt(" What is the second number?") // This is a good question, Devin
let number2 = readline.question();

prompt("What operation would you like to perform?\n 1) Add 2) Subtract 3) Multiply 4) Divide")
operation = readline.question();
let output;
if (operation === '1'){
    output = Number(number1) + Number(number2);
} else if (operation === '2') {
    output = Number(number1) - Number(number2);
} else if (operation === '3') {
    output = Number(number1) * Number(number2);
} else if (operation === '4') {
    output = Number(number1) / Number(number2);
}
    prompt(`The result is ${output}.`)