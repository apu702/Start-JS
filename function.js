//Basic
function sayLoveYou(){
    console.log('Jaan O baby');
    console.log('Billy baby Koi Tmi');
}

sayLoveYou();
var date = 14;
var place = "Restaurant";
sayLoveYou();
var hangoutPlace = "TSC";
sayLoveYou();



//Function parameter//
        //function doubleIt(num){
        // var result = num * 2;
        // console.log(result);
        //}

        //doubleIt(5);
        //doubleIt(100);
        //doubleIt(25);

//Function pass single parameter//
function doubleIt(num){
    var result = num * 2;
    return result;
}

var first = doubleIt(5);
var second = doubleIt(50);
var total = first + second;
console.log(total);


//Function pass multi parameter//
function add(num1, num2){
    var result = num1 + num2;
    return result;
}

var sum = add(15,17);
console.log(sum);