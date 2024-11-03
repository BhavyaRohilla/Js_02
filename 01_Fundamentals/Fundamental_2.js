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
*/

/*
// Day - 6

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const year = new Array(1991, 1992, 1993, 1994);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = [12, 45, 98]; Invalid
const firstName = "Bhavya";
const bhavya = [firstName, "Rohilla", 2024 - 2001, "Teacher", friends];
console.log(bhavya[4][2]);

// Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

/////////////////////////////////////////////////////////
// Basic Array operations(Methods)
const friends = ["Micheal", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}


//////////////////////////////////////
// Objects

const bhavyaArray = [
  "Bhavya",
  "Rohilla",
  2024 - 2001,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

const bhavya = {
  firstName: "Bhavya",
  lastName: "Rohilla",
  age: 2024 - 2001,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};

console.log(bhavya);
console.log(bhavya.lastName);
console.log(bhavya["lastName"]);

const nameKey = "Name";
console.log(bhavya["first" + nameKey]);
console.log(bhavya["last" + nameKey]);

// console.log(bhavya.'last' + nameKey)  // Invalid

// const InterestedIn = prompt(
//   "What do you want to know about Bhavya? choose between firstName, lastName, age, job, and friends"
// );
// if (bhavya[InterestedIn]) {
//   console.log(bhavya[InterestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose Between firstName, lastName, age, job, and friends"
//   );
// }

bhavya.location = "Haryana";
bhavya["instagram"] = "Nope";
console.log(bhavya);

// Challenge
// (Bhavya) has (3) friends, and his best friend is called (Micheal)

console.log(
  `${bhavya.firstName} has ${bhavya.friends.length} friends, and his best friend is called ${bhavya.friends[0]}`
);
*/

////////////////////////////////////////////////////////
// Day - 7
/*
const sneha = {
  firstName: "Sneha",
  lastName: "Dhingra",
  birthYear: 2005,
  job: "Student",
  friend: ["Lucky", "Muskan", "Komal"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};

console.log(sneha.calcAge());
// console.log(sneha["calcAge"](2009));

// Challenge
// "Sneha is a 19-year old student, and she has a driver's license"
// Using object method or function


////////////////////////////////////
// Iteration_The for loop

// console.log("Lifting weight repitition 1 🏋️");
// console.log("Lifting weight repitition 2 🏋️");
// console.log("Lifting weight repitition 3 🏋️");
// console.log("Lifting weight repitition 4 🏋️");
// console.log("Lifting weight repitition 5 🏋️");
// console.log("Lifting weight repitition 6 🏋️");
// console.log("Lifting weight repitition 7 🏋️");
// console.log("Lifting weight repitition 8 🏋️");
// console.log("Lifting weight repitition 9 🏋️");
// console.log("Lifting weight repitition 10 🏋️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep = rep + 1) {
  console.log(`Lifting weight repitition ${rep} 🏋️`);
}


/////////////////////////////////////
// Looping Array
const bhavyaArray = [
  "Bhavya",
  "Rohilla",
  2024 - 2001,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < bhavyaArray.length; i++) {
  console.log(bhavyaArray[i], typeof bhavyaArray[i]);

  // Filling types array
  // types[i] = typeof bhavyaArray[i];
  types.push(typeof bhavyaArray[i]);
}

console.log(types);

// Continue and Break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < bhavyaArray.length; i++) {
  if (typeof bhavyaArray[i] !== "string") continue;

  console.log(bhavyaArray[i], typeof bhavyaArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < bhavyaArray.length; i++) {
  if (typeof bhavyaArray[i] === "number") break;

  console.log(bhavyaArray[i], typeof bhavyaArray[i]);
}


///////////////////////////////////////////
// While Loop

for (let rep = 1; rep <= 30; rep = rep + 1) {
  console.log(`Lifting weight repitition ${rep} 🏋️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repitition ${rep} 🏋️`);
  rep++;
}
*/

const abc = {
  ab: 12,
};
