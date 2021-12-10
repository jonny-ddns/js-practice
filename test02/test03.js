console.log("@test03.js");

// console.log(document.children[0]);
// console.log(document.children[0].children[0]);
// console.log(document.children[0].children[1].parentNode);

var head = document.children[0].children[0];
console.log(head.firstElementChild);
console.log(head.lastElementChild);

head.children[1];

var link = head.children[1];
console.log(link.nextElementSibling);
console.log(link.previousElementSibling);