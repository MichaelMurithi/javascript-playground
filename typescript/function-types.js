"use strict";
exports.__esModule = true;
//String functions 
var stringFuction;
var numberFunction;
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
function add(num1, num2) {
    return num1 + num2;
}
numberFunction = add; //add satisfies the properties of a the number function hence no errors raised
console.log(numberFunction(14, 16));
stringFuction = getFullName; //Checks whether getFullName satisfies the conditions for a string function
console.log(stringFuction("Michael", "Murithi"));
