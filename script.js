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
*/

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
