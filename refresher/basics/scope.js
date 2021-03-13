// ***********Scope of a function******** 
/**
 * The scope of a variable controls where the variable can be accessed from
 * We can have a 'global scope' meaning the variable can be accessed from anywhere
 * We can have a 'block scope' meaning the variable can be accessed only from inside of the block where it is declared
 * A block can be a function, a loop or anything deliminated by curly brackets 

*/

//Variables declared using the var keyword are not bound to block scope
var myNum = 1;

if(myNum === 1){
    var mySecondInt = 2
}
console.log(mySecondInt) //My second integer is still available outside the scope

//variables using let or const keyword are bound to the block scope where they've been declared

if(myNum === 1){
    let myThirdInt = 3
}
// console.log(myThirdInt) This returns an error since the variable was declared using the 'let' keyword in the initial scope
