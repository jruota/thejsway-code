function countElements(cssSelector) {
  return document.querySelectorAll(cssSelector).length;
}

console.log(countElements("p"));
console.log(countElements(".adjective"));
console.log(countElements("p .adjective"));
console.log(countElements("p > .adjective"));
