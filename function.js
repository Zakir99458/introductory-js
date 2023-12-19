function startFan(){
    console.log("Press the switch on")
}
// Call the function
startFan();

// Function with parameter

function bringSomething(money){
    if(money>100)
        result = "You can buy banana";
    else
        result = "Money is not enough";

    return result;
}
var money = 102;
outcome = bringSomething(money);
console.log(outcome);