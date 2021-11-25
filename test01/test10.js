console.log("@test10.js");

function shadow(){
    console.log("shadow val = ", val);
    val++;
}

var val = 0;
shadow();
console.log("val = ", val);