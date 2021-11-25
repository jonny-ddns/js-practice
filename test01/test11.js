console.log("@test11.js");

function f(){
    console.log("F");
    console.log(this);
    return 0;
}

var obj = {name : "hong", method : f};

f();
obj.method();
console.log(obj.name);
console.log("---------------------");
console.log(obj.method());
console.log("---------------------");
console.log(obj.method());