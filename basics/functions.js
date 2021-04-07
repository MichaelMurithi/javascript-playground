/**
 * The variable inside the parenthesis of a function is called a parameter
 * The code inside curly brackets is a statement
 * Primitives are passed to a function by value (changes done to the values are not reflected globally)
 
 */

// Primitives are passed to a function by value (changes done to the values are not reflected globally)

let myInt = 1

function increase(value){
    return value += 1
}

console.log(myInt)
console.log(increase(myInt))
console.log(myInt)

// If the va;ue is not a primitive such as an object or an array, it is passed 'by reference' meaning any modification done to it will be reflected in the original object

let myCar = {
    make:'bmw',
    color:"red"
}

function changeColor(car){
    car.color = "blue"
}

changeColor(myCar)
console.log("The car I have changed color is",myCar)

// Function expressions can also be used to declare a function
const greeter = function greet(name){
    console.log("Hello",name +" greetings from named greeter!")
}
greeter("Javascript learner")

// With function expressions, we can create anonymous functions
const anonymousGreeter = function(name){
    console.log("Hello, " + name + " greetings from anonymous greeter!")
}
anonymousGreeter("Javascript learner")

//An arrow function can also be used to create an anonymous function
const anonymousArrowGreeter = (name) =>{
    console.log("Hello, " + name, "receive greetings from and anonymous arrow greeter!")
}
anonymousArrowGreeter("Michael")


