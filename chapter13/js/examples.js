// JavaScript code goes here

function showChild(node, index) {
  if (node.nodeType == document.TEXT_NODE) {
    console.error("Wrong node type");
  } else if (index >= node.childNodes.length || index < 0) {
    console.error("Incorrect index");
  } else {
    console.log(node.childNodes[index]);
  }
}

// Should show the h1 node
showChild(document.body, 1);

// Should show "Incorrect index"
showChild(document.body, -1);

// Should show "Incorrect index"
showChild(document.body, 8);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
