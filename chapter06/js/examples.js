// JavaScript code goes here

// Adding Character Experience

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP.`;
  },
};

aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;

console.log(aurora.describe());

// ############################################################################

// Modeling a Dog

let dog = {
  name: "Fang",
  species: "boarhound",
  size: 75,

  bark() {
    return "Grrr! Grrr!";
  },
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// ############################################################################

// Modeling a Circle

/* const r = Number(prompt("Enter the circle radius:"));

let circle = {
  circumference() {
    return 2 * Math.PI * r;
  },
  area() {
    return Math.PI * r ** 2;
  },
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`); */

// ############################################################################

// Modeling a Bank Account

let bankAccount = {
  name: "Alex",
  balance: 0,

  credit(amount) {
    this.balance += amount;
  },

  describe() {
    return `owner: ${this.name}, balance ${this.balance}`;
  },
};

console.log(bankAccount.describe());
bankAccount.credit(250);
bankAccount.credit(-80);
console.log(bankAccount.describe());
