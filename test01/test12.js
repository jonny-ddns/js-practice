console.log("@test12.js");

function f(){
    console.log("function F");
    return this;
}

function setName(name){
    this.name = name;
}

function test(index){
    this.index = index;
}

var obj = {name: "hong", method: f, setName: setName};
var obj2 = {name: "", setName: setName};
var obj3 = {index: 5, setIndex: test}

obj.setName("choi");
obj2.setName("cushion");
obj3.setIndex(500);

console.log(obj.method);
console.log(obj.method());
console.log(obj2);
console.log(obj3);