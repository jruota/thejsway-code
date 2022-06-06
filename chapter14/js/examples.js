// JavaScript code goes here

const titleElements = document.getElementsByTagName("h2");

console.log(titleElements[0]);
console.log(titleElements.length);

const existingElements = Array.from(
  document.body.getElementsByClassName("exists")
);
existingElements.forEach((element) => console.log(element));

console.log(document.getElementById("new"));

console.log(document.getElementById("content").innerHTML);

console.log(document.getElementById("content").textContent);

console.log(document.querySelector("a").getAttribute("href"));

console.log(document.querySelector("ul").id);
console.log(document.querySelector("a").href);
