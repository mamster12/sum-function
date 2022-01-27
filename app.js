// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question(`Enter 3 numbers (space separated):?`, (name) => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

let input = prompt("Enter 3 numbers: ").split(" ");
let arrayInput = [...input];

// init();

// function init() {
//   if (isNaN(input.join(""))) {
//     console.log("Please input a number");
//   } else if (arrayInput.length > 3) {
//     console.log("input is over 3 items, start again1");
//   } else {1
//     sum(arrayInput[0], arrayInput[1], arrayInput[2]);
//   }
// }
let a, b, c;

const sum = (a, b, c) => {
  a = parseInt(arrayInput[0]);
  b = parseInt(arrayInput[1]);
  c = parseInt(arrayInput[2]);

  if (arrayInput.length === 3) {
    console.log(a + b + c);
  } else {
    a = parseInt(arrayInput[0]);
    b = parseInt(arrayInput[1]);
    while (arrayInput.length < 3) {
      filler(arrayInput.length);
    }
    c = parseInt(arrayInput[2]);
    console.log(a + b + c);
  }

  //   if (arLen < 3) {
  //     filler(arLen);
  //     sum(arrayInput[0], arrayInput[1], arrayInput[2]);
  //   } else {
  //     console.log(a + b + c);
  //   };
};

const filler = (arLen) => {
  let adder = prompt(`Enter ${3 - arLen} more number(s): `).split(" ");
  arrayInput = arrayInput.concat(adder);
  console.log(arrayInput);
};

sum(a, b, c);
// const sum = (a, b, c) => {
//   if (arrayInput.length === 1) {
//     arrayInput.push();
//   } else {
//     return a + b + c;
//   }
// };
