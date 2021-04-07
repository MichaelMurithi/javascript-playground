/**
 * Generators - a generator is a function that we can start and stop for an indefinite amount of time
 - It can also be restarted with the posibility of passing additional data at a later period of time
* Using .return() we can return a given value and finish our generator

 */

 //Creating a generator function 
 function* listFruits(){
     yield "Banana"
     yield "Apple"
     yield "Orange"
 } 

const fruits = listFruits()
// console.log(fruits.next())
// console.log(fruits.next())
// console.log(fruits.next())
console.log(fruits.next()) //returns undefined after reaching the last value


//Looping over an array with a generator
const fruitList  = ["Banana","Apple","Oranges","Berries"]

function* eat(fruitList){
    for(const fruit of fruitList){
        yield `I like to eat ${fruit}`
    }
}

const loopedFruits = eat(fruitList)

console.log(loopedFruits.next())
console.log(loopedFruits.next())

//return is used to end the generator and return the passed in value
console.log(loopedFruits.return("The looped fruits generator was ended"))

//catching errors with .throw()
function* smartGenerator(){
    try{
        yield "Trying..."
        yield "Trying harder..."
        yield "Trying even harder..."
    }
    catch(err){
        console.log(`Error ${err}`)
    }
}

const myGenerator = smartGenerator()
console.log(myGenerator.next().value)
console.log(myGenerator.next().value)
console.log(myGenerator.throw("Oops! something went on while trying the hardest.."))

