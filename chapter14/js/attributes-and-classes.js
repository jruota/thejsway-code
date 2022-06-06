function linkInfo() {
  const links = document.querySelectorAll("a");
  if (links.length > 0) {
    console.log(links.length);
    console.log(links.item(0).getAttribute("href"));
    console.log(links.item(links.length - 1).getAttribute("href"));
  } else {
    console.log("There are no links.");
  }
}

function has(id, someClass) {
  const element = document.getElementById(id);
  if (element) {
    console.log(element.classList.contains(someClass));
  } else {
    console.error(`No element has id ${id}.`);
  }
}

// ############################################################################

linkInfo();

has("saxophone", "woodwind");
has("saxophone", "brass");
has("trumpet", "brass");
has("contrabass", "chordophone");
