// use the browser for testing :)

let regex = /[ ,]+/; // for white spaces and comma separator

// User Input
let input = prompt("Enter 3 numbers (use space or comma as separator): ").split(
  regex
);

// Tracking the inputted numbers
let arrInput = [...input];

// initialized the 3 parameter variables
let a, b, c;

// Main function Sum
const sum = (a, b, c) => {
  while (arrInput.length < 3) {
    filler(arrInput.length);
  }
  a = parseInt(arrInput[0]);
  b = parseInt(arrInput[1]);
  c = parseInt(arrInput[2]);
  console.log(`sum is equal to: ${a + b + c}`);
};

// Function Filler for Missing Parameters
const filler = (arrLength) => {
  let adder = prompt(`Enter ${3 - arrLength} more number(s): `).split(regex);
  arrInput = arrInput.concat(adder);
  console.log(arrInput);
  100;
};

sum(a, b, c);
