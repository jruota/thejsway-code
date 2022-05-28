// JavaScript code goes here

// Following Day

/* let day = prompt("Enter a week day:").toLowerCase();
let next; */

/* if (day === "monday") {
  next = "Tuesday";
} else if (day === "tuesday") {
  next = "Wednesday";
} else if (day === "wednesday") {
  next = "Thursday";
} else if (day === "thursday") {
  next = "Friday";
} else if (day === "friday") {
  next = "Saturday";
} else if (day === "saturday") {
  next = "Sunday";
} else if (day === "sunday") {
  next = "Monday";
} else {
  next = "Invalid week day!";
} */

/* switch (day) {
  case "monday":
    next = "Tuesday";
    break;
  case "tuesday":
    next = "Wednesday";
    break;
  case "wednesday":
    next = "Thursday";
    break;
  case "thursday":
    next = "Friday";
    break;
  case "friday":
    next = "Saturday";
    break;
  case "saturday":
    next = "Sunday";
    break;
  case "sunday":
    next = "Monday";
    break;
  default:
    next = "Invalid week day!";
} */

// console.log(next);

// ############################################################################

// Number Comparison

/* const number1 = Number(prompt("Enter a number:"));
const number2 = Number(prompt("Enter another number:"));
let res;

if (number1 === number2) {
  res = "The numbers are equal.";
} else if (number1 < number2) {
  res = "The first number is less than the second number.";
} else if (number1 > number2) {
  res = "The first number is greater than the second number.";
} else {
  res = "Something went wrong.";
}

console.log(res); */

// ############################################################################

// Final Values

/* let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}

console.log(nb1, nb2, nb3); */

/*
initial values          nb1 final value     nb2 final value     nb3 final value
nb1=nb2=nb3=4           0                   4                   12
nb1=4, nb2=3, nb3=2     4                   3                   2
nb1=2, nb2=4, nb3=0     3                   4                   0
*/

// ############################################################################

// Number of Days in a Month

/* let month_number = Number(prompt("Enter a month number:"));
let res;
 */
/* if (month_number >= 1 && month_number <= 12) {
  if (month_number === 2) {
    res = 28;
  } else if (
    month_number === 1 ||
    month_number === 3 ||
    month_number === 5 ||
    month_number === 7 ||
    month_number === 8 ||
    month_number === 10 ||
    month_number === 12
  ) {
    res = 31;
  } else {
    res = 30;
  }
} else {
  res = "Incorrect input.";
} */

/* if (month_number >= 1 && month_number <= 12) {
  switch (month_number) {
    case 1:
      res = 31;
      break;
    case 2:
      res = 28;
      break;
    case 3:
      res = 31;
      break;
    case 4:
      res = 30;
      break;
    case 5:
      res = 31;
      break;
    case 6:
      res = 30;
      break;
    case 7:
      res = 31;
      break;
    case 8:
      res = 31;
      break;
    case 9:
      res = 30;
      break;
    case 10:
      res = 31;
      break;
    case 11:
      res = 30;
      break;
    case 12:
      res = 31;
      break;
  }
} else {
  res = "Incorrect input.";
} */

// console.log(res);

// ############################################################################

// Following Second

let hours = Number(prompt("Enter hours (0 to 23):"));
let minutes = Number(prompt("Enter minutes (0 to 59):"));
let seconds = Number(prompt("Enter seconds (0 to 59:"));

if (
  hours >= 0 &&
  hours < 24 &&
  minutes >= 0 &&
  minutes < 60 &&
  seconds >= 0 &&
  minutes < 60
) {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
  }
  console.log(`${hours}h${minutes}m${seconds}s`);
} else {
  console.log("Incorrect input.");
}
