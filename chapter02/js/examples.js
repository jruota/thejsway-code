// JavaScript code goes here

const first = prompt("Type in your first name:");
const last = prompt("Type in your last/family name:");
alert(`Hello, ${first} ${last}!`);
// alert("Hello," + first + " " + last + "!");

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = (a * b) / a;
const g = (b / a) * a;
console.log(a, b, c, d, e, f, g); // 2 10 102 30 40 10 10

const price = Number(prompt("Enter raw price:"));
console.log(`Total price including VAT is ${price * 1.206}.`);

const celsius = Number(prompt("Enter temperature in degrees Celsius:"));
console.log(`${celsius} °C is ${(celsius * 9) / 5 + 32} °F.`);

let number1 = 5;
let number2 = 3;

let storage = number1;
number1 = number2;
number2 = storage;

console.log(number1); // Should show 3
console.log(number2); // Should show 5
