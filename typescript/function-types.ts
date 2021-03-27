/**
 * In this file, we have funtions of 2 types, 'string funtions' and 'number funtions'
 * Functions can be used as types 
e.g let stringFunction: () => string -- The universal variable will only accept functions that return strings
 * To define arguments expected in the assigned funtions
  let numberFunction: (value1:number, value2:number) => number --Functions stored in the variable takes parameters of type 'number' and returns a 'number'
  - The variable can only store functions that meeet the specified qualifications
 * Trying to assign functions to a type that does not meet the specifications raises an error
  */
import {calculate} from './types2'

//String functions 
let stringFuction: (string1:string,string2:string) =>string;

let numberFunction: (value1:number, value2:number) => number;


function getFullName(firstName,lastName){
    return `${firstName} ${lastName}`
}

function add(num1,num2){
    return num1 + num2
}

numberFunction = add //add satisfies the properties of a the number function hence no errors raised
console.log(numberFunction(14,16))

stringFuction = getFullName //Checks whether getFullName satisfies the conditions for a string function
console.log(stringFuction("Michael","Murithi"))
