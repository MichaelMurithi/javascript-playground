/**
 * Variables can be declared by either: var, let or const keywords
 * Variables declared using 'var' keyword are function-scoped
 - When declared inside a for loop (which is block scoped), they will be available from the outside
 - When var keyword declares a variable inside a function, it cannot be accessed outside the function
 * Variables declared with the 'let' and 'const' keywords are block scoped i.e
 - Available only inside of the block they are declared and its sub-blocks
 * Variables declared using 'const' are also block-scoped but they differ in the fact that
 - Their value can't change through re-assignment and can't be re-declared
 - However, variables declared using 'const' are still mutable
 */

// Var keyword for function-scoped variables

for (var i = 0; i< 2; i++){
    var inBlock = "I am declared using var and available in and our of the loop"
}
console.log(inBlock) //The variable is available outside since var creates function-scoped variables

//let and const keywords declare block-scoped variables
let myVariable = 'global'

if (myVariable == 'global'){
    let myVariable = "block-scoped" // This does not change the variable value inside the global scope
    console.log("My variable inside a block is ",myVariable)
}
console.log("My variable outside a block is ",myVariable)

//Values declared using 'const' keyword cannot be re-assigned
const person ={
    name: "Michael",
    age:25,
}

person.age = 19 // The person object is still mutable
console.log("The age of ",person.name,"has changed to ",person.age);

Object.freeze(person) //Freezing the object makes it immutable
person.age = 20
console.log("Unfortunately the name of frozen person",person.name, "cannot be changed")