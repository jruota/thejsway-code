// JavaScript code goes here

// Musketeers

let musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach(function (item) {
  console.log(item);
});

musketeers.splice(2, 1);

for (item of musketeers) {
  console.log(item);
}

// ############################################################################

// Sum of Values

let numbers = [3, 11, 7, 2, 9, 10];

let res = 0;
for (let i = 0; i < numbers.length; i++) {
  res += numbers[i];
}
console.log(res);

// ############################################################################

// Array Maximum

function maximum(listOfNumbers) {
  let res = listOfNumbers[0];
  for (let i = 1; i < listOfNumbers.length; i++) {
    let current = listOfNumbers[i];
    if (res < current) {
      res = current;
    }
  }
  return res;
}

console.log(maximum(numbers));

// ############################################################################

// List of Words

let userInput = "";
while (userInput != "stop") {
  userInput = prompt("Type something:");
  if (userInput.toLowerCase() === "stop") {
    break;
  }
  console.log(userInput);
}
