console.log("@test13.js");

function makeCounter(initVal){
    var count = initVal;
    function increase(){
        console.log("increase function");
        count++;
        console.log(count);
    }
    return increase;
}
var counter1 = makeCounter(0);
var counter2 = makeCounter(10);

counter1();
counter2();