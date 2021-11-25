console.log("@test09.js");
console.log("안녕하세요");

var student01 = {
    name : "hong"
    , grade : "4"
    , age : "29"
    , nick : "abd"
}

var keys1 = Object.keys(student01);
var values1 = Object.values(student01);
console.log(keys1);
console.log(values1);

console.log(">>check1");
for(var i = 0; i < keys1.length ; i++){
    console.log(keys1[i]);
}

console.log(">>check2");
for(var item in values1){
    console.log(item + " : " + values1[item]);
}

console.log(null);
console.log(values1["tmp"]);
console.log(values1[0]);