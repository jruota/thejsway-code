// DATA DEFINITIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Link {
  constructor(title, url, author) {
    let fullURL = url;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      fullURL = "http://" + url;
    }

    this.title = title;
    this.url = fullURL;
    this.author = author;
  }

  toString() {
    return `${this.title} (${this.url}). ${this.author}`;
  }
}

// FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function main(links) {
  function showLinks() {
    if (links.length > 0) {
      let res = "";
      for (let i = 0; i < links.length; i++) {
        res += `${i + 1} ` + links[i].toString() + "\n";
      }
      alert(res);
    } else {
      alert("There are no links.");
    }
  }

  function addLinks() {
    const title = prompt("Enter link title:");
    const url = prompt("Enter link URL:");
    const author = prompt("Enter link author:");

    links.push(new Link(title, url, author));
  }

  function removeLink() {
    let index = 0;
    if (links.length > 0) {
      while (index <= 0 || index > links.length) {
        index = prompt(
          `Enter the index of the link to be removed ` +
            `(between 1 and ${links.length}):\n\n`
        );
      }
      links.splice(index - 1, 1);
    } else {
      alert("There are no links to remove.");
    }
  }

  let choice;
  while (choice != 0) {
    choice = prompt(
      "Choose an option:\n1: Show links\n2: " +
        "Add a link\n3: Remove link\n0: Quit"
    );

    switch (choice) {
      case "1":
        showLinks();
        break;
      case "2":
        addLinks();
        break;
      case "3":
        removeLink();
        break;
      default:
        break;
    }
  }
}

// DATA ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const links = [
  new Link("Hacker News", "new.ycombinator.com", "Baptiste"),
  new Link("Example", "example.com", "Someone"),
  new Link(
    "Mozilla Developer Network",
    "https://developer.mozilla.org/en-US/",
    "Someone Else"
  ),
  new Link("Duolingo", "duolingo.com", "Duo"),
  new Link("Reddit", "reddit.com", "Duke"),
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

main(links);
