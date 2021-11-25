console.log("@test06.js");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("array.length = " + array.length);
var a1;
a1 = array.pop();
console.log("pop = " + a1);
a1 = array.pop();
console.log("pop = " + a1);
a1 = array.shift();
console.log("shift = " + a1);
a1 = array.shift();
console.log("shift = " + a1);

console.log(array);
a1 = array.unshift();
console.log("unshift = " + a1);
console.log(array);

a1 = array.push(23);
console.log("a1 = " + a1, " || array = " + array);

a1 = array.unshift(0);
console.log("a1 = " + a1, " || array = " + array);

array.reverse();
console.log(array);




