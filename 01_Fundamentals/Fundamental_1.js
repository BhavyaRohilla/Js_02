/*
let js = "amazing";
if (js === "amazing") alert("Welcome");

console.log(40 + 85 + 549 * 5481);


// Variables and value
console.log("Bhavya");
console.log(23);

let firstName = "Matilda";
let first = "Neha";

console.log(firstName);
console.log(firstName);
console.log(firstName);

*/
/* Homework no 1 -  variable Naming convention
First : chatgpt - js  variable naming convention in easy langauge
Second : Geeks for Geeks full article 
copy notes 

Homework no 2 - Statically typed and dynamically typed
*/

/*
//////////////////////////////////////
// variable and naming convention

// Wrong
// let 3years = 3;
// let john&matilda = "Jm";

// Right
let john_matilda = "JM";
console.log(john_matilda);

let myFirstJob = "Programmer";
let myCurrentHob = "Teacher";

let job1 = "Programmer";
let job2 = "teacher";

//////////////////////////////////////
// Datatypes

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
javaScriptIsFun = 1345;
console.log(typeof javaScriptIsFun);
console.log(typeof "Bhavya");

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

console.log(typeof null);

// let const var
let age = 30;
age = 31;

const birthYear = 2001;
// birthYear = 2003;

const job = "Teacher";

var job1 = "programmer";
job1 = "Teacher";

// very bad Practice
lastName = "Doe";
console.log(lastName);


// Basic Operator, Math Operator

const ageBhavya = 2024 - 2001;
const ageSneha = 2024 - 2005;
const ageNeha = 2024 - 2004;
console.log(ageBhavya, ageNeha, ageSneha);

console.log(ageNeha * 2, ageSneha / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Sneha";
const lastName = "Dhingra";
console.log(firstName + " " + lastName);

// Assignment Operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1; = 101
x--;
x--;
console.log(x);

// Comparison Operator
console.log(ageNeha > ageSneha); // >, <, >=, <=

const isFullAge = ageSneha >= 18;
console.log(isFullAge);

console.log(18 > 18);
console.log(18 >= 18);
*/

////////////////////////////////////////////////////////////////////////
// Day - 2

/*
// Operator Precedence
const now = 2024;
const ageSneha = 2024 - 2005;
const ageNeha = 2024 - 2004;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = ageNeha + ageSneha / 2;
console.log(ageNeha, ageSneha, averageAge);
*/

/*
// Strings and template literals
const firstName = "Bhavya";
const job = "teacher";
const birthYear = 2001;
const year = 2024;

const bhavya =
  "I'm " + firstName + ", a " + (year - birthYear) + "Years old " + job + "!";
console.log(bhavya);

const bhavyaNew = `I'm ${firstName}, a ${year - birthYear} Years old ${job} !`;
console.log(bhavyaNew);
console.log(`Just a regular String.....`);
console.log(
  "String with \n\
  multiple \n\
  lines"
);
console.log(`String
  multiple 
  lines`);


// if else

const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah Can start driving license");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

//////////////////////////////////////////////////////////////
// day - 3

/*
// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Neha"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old!!");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!!!");
}

let height;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is undefined");
}
*/

/*
// Equality Operator
let age = 18;
if (age === 18) {
  console.log("You just became an adult :D (strict)");
}

age = "18";

if (age == 18) {
  console.log("You just became an adult :D (loose)");
}

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else {
  console.log("Number is not 23 or 7");
}
*/

/*
// Logical Operator

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive......");
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);
*/

/*
// Switch case
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan couse structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thrusday":
    console.log("Write Code Example");
    break;
  case "friday":
    console.log("Record Video");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan couse structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write Code Example");
} else if (day === "friday") {
  console.log("Record Video");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!!");
}
*/

/*
// Statement and Exression
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Ram";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

/*
// Ternary Operator

const age = 23;
// age >= 18
//   ? console.log("I like to deink wine 🍷")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

// console.log("18" === 18);
// console.log("18" == 18);

///////////////////////////////////////
// Coding Challenge #1
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightJohn ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/

// Coding Chllenges #2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightJohn ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Challenge #3
const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
  console.log("Dolphins Wins the trophy!!!");
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
  console.log("Koalas Wins the trophy!!!");
} else if (
  scoreDolphin === scoreKoalas &&
  scoreDolphin >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both Wins the Trophy!!!!!!!");
} else {
  console.log("No one wins the trophy");
}

// Challenge 4

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
