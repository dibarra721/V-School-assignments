var readlineSync = require('readline-sync');
var name = readlineSync.question('What is your first name ');
console.log('Hi ' + name + ' Are you ready to do some math');

// setting variables// 
var num1 = readlineSync.question('Enter your first number: ');
var num2 = readlineSync.question('Enter your second number: ');
var userOperator = readlineSync.question('Enter operation you wish to use: + to add, - to subtract, * to multiply, / to divide: ');
// functions to be done //
function addNumbers (num1, num2) {
  return +num1 + +num2;
}
function subtractNumbers (num1, num2) {
  return num1 - num2;
}
function multiplyNumbers (num1, num2) {
  return num1 * num2;
}
function divideNumbers (num1, num2) {
  return num1 / num2
}
// Function for the calculator, and parameters for calculator to work // 
function calculator (num1, num2, userOperator) {
  if (userOperator === "+") {
    console.log('Your result is: ' + addNumbers(num1, num2))
  } else if (userOperator === "-") {
    console.log('Your result is: ' + subtractNumbers(num1, num2))
  } else if (userOperator === "*") {
    console.log('Your result is: ' + multiplyNumbers(num1, num2))
  } else if (userOperator === "/") {
    console.log('Your result is: ' + divideNumbers(num1,num2))
  } else {
    console.log('Please use +, -, *, /')
  }
} 
calculator(num1, num2, userOperator)