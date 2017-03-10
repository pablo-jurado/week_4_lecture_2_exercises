//List the five falsey values in JavaScript.
var falsey = [0, '', false, undefined, null];

//List five truthy values in JavaScript.
var truthy = [124, 'hello', true, {}, -34];

// Take a look at the code example below and state what the variable sameAge
// will be set to and explain why.

var myAge = 33;
var yourAge = '33';

var sameAge = (myAge === yourAge) ? 'Yes!' : 'No!';

// sameAge = 'No' Because the number 33 is not strictly equal to the string '33'

//Write a small program that has a line of code that does each of the following
//and prints out the result:

var number1 = 8 + 15;
var number2 = 8 + 15 + (-100);
var number3 = -50 + 32.8;
var number4 = 35 - 2.8;
var number5 = 35 - 2.8 - 17;
var number6 = -5 + 32 - 8;
var number7 = 75 + (-35) - 2.8;
var number8 = 6 * (-0.1);
var number9 = -8 * 5 * (1e9 + 0.8);
var number10 = 5 / -12;
var number11 = 25 / -12 / 2;
var number12 = 25 % 4;
var number13 = ((5 + (-4) - (-4) * 3 / 2.3) % 9);

//create a sentence of your own. It must include
//"and", "or", and "not" logic. Now, translate that sentence into code.

//I will go out this weekend if I am not tired and I not have any homework
//or if I have enough money

var isPabloTired = false;
var isHomeworkDone = true;
var isEnoughMoney = true;

/* am I going out to eat? */
console.log((isPabloTired && isHomeworkDone) || isEnoughMoney);
