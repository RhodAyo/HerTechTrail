// HINT
// Try solving each question one after the other. You can comment out others while you try to fix one.

// Question 1
function random() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
random();
// Question 2
function addIfEven(num) {
  if (num % 2 == 0) {
    return num + 5;
  }
  return num;
}
addIfEven(6);

// Question3
function loopToFive() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}
loopToFive();

// Question 4
function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}
displayEvenNumbers(); // should return [2,4,6,8]

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.
