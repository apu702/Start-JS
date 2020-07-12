//number Start//
var seenAfter = 21;
console.log(typeof seenAfter);

    var num1 = 25;//int//
    var num2 = 15.5;//float//
    console.log(num1+num2)


    //String To number convert(parseInt,parseFloat)//
    var num1 = 25;
    var num2 = '15.5';
    num2 = parseFloat(num2);//or, num2 = +num2;
    console.log(num1+num2)

    //Number to string convert//
    var num1 = 25;
    num1 = '' + num1;
    console.log(typeof num1)


    //Float number(5th Decimal number )//
    var num1 = 0.1;
    var num2 = 0.2;
    var total = num1+num2;
    total = total.toFixed(5);
    console.log(total)

//number END//



//String start//
var name = "Hasnat";
console.log(name);

    //to make string lowercase or Uppercase//
    var promise = "I will Promise";
    console.log(promise.toLowerCase());

    var promise = "I will Promise";
    console.log(promise.toUpperCase());

    //To find any word//
    var promise = "I will Promise";
    console.log(promise.indexOf('will'));

    //Split//
    var promise = "I Promise I will work hard";
    console.log(promise.split('I'));
//String END//


//boolean(true,false)//
var isHot = true;
var isRich = false;

console.log(typeof isHot);
