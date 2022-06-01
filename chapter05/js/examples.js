// JavaScript code goes here

// Improved Hello

/* function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

console.log(sayHello(firstName, lastName)); */

// ############################################################################

// Number Squaring

/* function square1(x) {
  return x * x;
}

const square2 = (x) => x * x;

console.log(square1(0));
console.log(square1(2));
console.log(square1(5));

console.log(square2(0));
console.log(square2(2));
console.log(square2(5));

for (let i = 0; i < 11; i++) {
  console.log(square1(i));
} */

// ############################################################################

// Minimum of Two Numbers

/* function min(number1, number2) {
  if (number1 < number2) {
    return number1;
  }
  return number2;
}

console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1)); */

// ############################################################################

// Calculator

/* function calculate(number1, operator, number2) {
  switch (operator) {
    case "+":
      return number1 + number2;
      break;
    case "-":
      return number1 - number2;
      break;
    case "*":
      return number1 * number2;
      break;
    case "/":
      return number1 / number2;
      break;
    default:
      console.log("Something went wrong.");
  }
}

console.log(calculate(4, "+", 6));
console.log(calculate(4, "-", 6));
console.log(calculate(2, "*", 0));
console.log(calculate(12, "/", 0)); */

// ############################################################################

// Circumference and area of a circle

function circumference(radius) {
  return 2 * Math.PI * radius;
}

function area(radius) {
  return Math.PI * radius ** 2;
}

console.log(circumference(1));
console.log(circumference(1 / Math.PI));

console.log(area(1));
let inverseRadius = Math.PI ** (1 / 2);
console.log(area(1 / inverseRadius));
