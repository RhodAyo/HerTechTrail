// USING COMMON MODULES

function randomFunction() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
      evenNumbers.push(num);
      console.log("Executed!");
    }
  }
  return evenNumbers;
}

function getEvenSum(num) {
  if (num % 2 == 0) {
    console.log("num");
    return num + 5;
  }
  return num;
}
getEvenSum(6);

let ages = 25;

module.exports = { randomFunction, getEvenSum, age };

//*
//** */
//*** */
//**** */

// USING ES MODULES using Default keyword.

export default function randomFunction() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
      evenNumbers.push(num);
      console.log("Executed!");
    }
  }
  return evenNumbers;
}

export function getEvenSum(num) {
  if (num % 2 == 0) {
    console.log("num");
    return num + 5;
  }
  return num;
}
getEvenSum(6);

export var age = 25;
