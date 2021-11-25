console.log("@test07.js");

var number1 = parseInt(Math.random() * 100 + 1);
var number2 = parseInt(Math.random() * 100 + 1);
var answer = number1 + number2;
var input = parseInt(prompt(number1 + " + " + number2 + " = ?"));

if(input == answer){
    alert("correct");
} else {
    alert("wrong");
}
