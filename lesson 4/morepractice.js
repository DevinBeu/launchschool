let numbers = [1, 3, 9, 11, 1, 4, 2, 3];
let ones = [];
for (let counter = 0; counter < numbers.length; counter++) {
  let currentNum = numbers[counter];

  if (currentNum === 1) {
    ones.push(currentNum);
  }
}
console.log(ones);
