var man = {name : "mrHong", grade : "12", nick : "hello"};
var ty = typeof(man);
console.log("ty = ", ty);
console.log("man = ", man);
console.log("man.name = ", man.name);
console.log("man.grade = ", man.grade);
console.log("man['nick'] = ", man["nick"]);
man.name = 'choi';
console.log("man = ", man);
console.log("man.name = ", man.name);