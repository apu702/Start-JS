//Basic Structure//
var friendsAge = [12, 15, 16, 17];//Index position 0,1,2,3-----//
console.log(friendsAge);


//Find Position value// 
var friendsAge = [12, 15, 16, 17];
console.log(friendsAge[1]);

 
//Keep value from array to variable//
var friendsAge = [12, 15, 16, 17];
var rahimAge = friendsAge[2];
console.log(rahimAge);

//Update array value//
var friendsAge = [12, 15, 16, 17];
friendsAge[0] = 13  ;
console.log(friendsAge);


//Update array value//
var friendsAge = [12, 15, 16, 17];
var position = friendsAge.indexOf(17);//value na thakle output -1 ashbe//
console.log(position);


//add value to array(Push) to last//
var friendsAge = [12, 15, 16, 17];
console.log(friendsAge);

friendsAge.push(19);
friendsAge.push(21);
friendsAge.push(23,24,25);
console.log(friendsAge);


//Array Length//
var friendsAge = [12, 15, 16, 17];
console.log(friendsAge.length);


//Remove value From array(Pop) from last//
var friendsAge = [12, 15, 16, 17];
console.log(friendsAge);

friendsAge.pop();
console.log(friendsAge);

//String Related Push,Pop//
var tealine = ['kalam', 'salam', 'Balam'];
console.log(tealine);

tealine.push('Jamal');
console.log(tealine);

tealine.pop();
console.log(tealine);


//Remove from Begining (Shift)//
var tealine = ['kalam', 'salam', 'Balam'];
console.log(tealine);

tealine.shift();
console.log(tealine);


//Add to Begining (unshift)//
var tealine = ['kalam', 'salam', 'Balam'];
console.log(tealine);

tealine.unshift('palam');
console.log(tealine);


//JavaScript Slice//
var tealine = ['Palam','kalam', 'salam', 'Balam', 'Jamal', 'Kuddus'];
var part = tealine.slice(2);
console.log(part);

var part = tealine.slice(2,5);
console.log(part);





