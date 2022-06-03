// JavaScript code goes here

// Word Info

const word = prompt("Type a word:");
console.log(word.length, word.toUpperCase(), word.toLowerCase());

// ############################################################################

// Vowel Count

let vowelCounter = 0;
for (const letter of word) {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    vowelCounter++;
  }
}

console.log(`${word} has ${vowelCounter} vowels.`);

// ############################################################################

// Backwards Word

function backwardsWord(word) {
  const letters = Array.from(word);

  let bW = "";
  letters.forEach((letter) => {
    bW = letter + bW;
  });

  return bW;
}

console.log(`${word} backwards is ${backwardsWord(word)}.`);

// ############################################################################

// Palindrome

function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord === backwardsWord(lowerCaseWord)) {
    return true;
  }
  return false;
}

if (isPalindrome(word)) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}
