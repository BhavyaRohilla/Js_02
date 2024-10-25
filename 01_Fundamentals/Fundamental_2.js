"use strict";

// Day - 5

/*
// Strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
*/

/*
// Function
function logger() {
  console.log("My name is bhavya");
}

// calling / runnig / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// console.log(fruitProcessor(5, 2));
const appleOrnagesJuice = fruitProcessor(2, 4);
console.log(appleOrnagesJuice);
*/

/*
// Function Declaration vs Function Expression

// Function Declaration
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(2005);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(2004);
console.log(age1, age2);
*/

/*
// Arrow Function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1991, "Ram"));
console.log(yearUntilRetirement(2001, "Bhavya"));
console.log(yearUntilRetirement(2004, "Neha"));
console.log(yearUntilRetirement(2005, "Sneha"));
*/

/*
// Function Calling another Function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 2));
*/

// Reviewing Function

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} has already retires 🎉`);
  }
};

yearUntilRetirement(1991, "Ram");
yearUntilRetirement(1955, "Mike");
