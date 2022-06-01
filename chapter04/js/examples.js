// JavaScript code goes here

// Carousel

//let rounds = Number(prompt("Enter a number of rounds:"));

/* for (rounds; rounds > 0; rounds--) {
  console.log(rounds);
} */

/* while (rounds > 0) {
  console.log(rounds);
  rounds--;
}
 */

// ############################################################################

// Parity

// let start = Number(prompt("Enter a number:"));

/* for (let i = start; i < start + 10; i++) {
  if (i === 0) {
    console.log(`${i} is neither even nor odd`);
  } else if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
} */

/* let i = start;
while (i < start + 10) {
  if (i === 0) {
    console.log("0 is neither even nor odd");
  } else if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
  i++;
} */

// ############################################################################

// Input Validation

/* let number = 101;

while (number > 100) {
  number = Number(prompt("Enter a number:"));
  console.log(`Entered: ${number}`);
} */

/* for (let i = 101; i > 100; i = 101) {
  i = Number(prompt("Enter a number:"));
  console.log(`Entered: ${i}`);
  if (i < 101) {
    break;
  }
} */

// ############################################################################

// Multiplication Table

/* let number = Number(prompt("Enter a number between 2 and 9:"));

while (number < 2 || number > 9) {
  number = Number(prompt("Enter a number between 2 and 9:"));
}

for (let i = 1; i < 11; i++) {
  console.log(`${i} x ${number} = ${i * number}`);
} */

// ############################################################################

// Neither Yes nor No

/* let nyno = "";

while (!(nyno === "yes" || nyno === "no")) {
  nyno = prompt("Enter text:").toLowerCase();
  console.log(`Entered: ${nyno}`);
} */

// ############################################################################

// FizzBuzz

/* for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 == 0) {
    console.log(`${i}\t->\tFizzBuzz`);
  } else if (i % 5 == 0 && i % 3 != 0) {
    console.log(`${i}\t->\tBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i}\t->\tFizz`);
  }
} */

let res;
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0) {
    res = "Fizz";
    if (i % 5 === 0) {
      res += "Buzz";
    }
  } else if (i % 5 === 0) {
    res = "Buzz";
  }

  if (res) {
    console.log(`${i}\t->\t${res}`);
  }
  res = "";
}
