/**
 * Array.from() --It takes something that looks like an arrray and transform it into a real array
 - It takes a second argument, a map function to manipulate values passed to the newly formed array
 * Array.find() --returns the value of the first element in the array that satisfies the provided testing funtion
 - Otherwise, undefined is returned
 * Array.some() -- will search if there are some items matching the given position and stop once it finds one
 - Array.every() -- will check if all elements match the given condition or not 
 */

// document.addEventListener("DOMContentLoaded",function(){
//     const fruits = document.querySelector(".fruits p");
//     //fruits is a nodelist containing 3 p tags
    
//     //now we convert it into an array
//     const fruitArray = Array.from(fruits,fruit =>{
//         return fruit.textContent
//     });
//     console.log(fruitArray)

//     //Since we are dealing with an array, we can use .map
//     const fruitNames = fruitArray.map(f => fruit.textContent);
//     console.log(fruitNames)

//     //In this case, a map funtion is used to get the textcontent from the fruits 'p' tags
//     const mappedFruitNames = Array.from(fruits,fruit =>{
//         return fruit.textContent
//     })
//     console.log(mappedFruitNames)
// })

// Array.of() will create an array with all the arguments we pass into it
const digits = Array.of(1,2,3,4,5)
console.log(digits)

//Array.find() returns the value of the first element in the array
const array = [1,2,3,4,5]
let found = array.find(
    e => e >3
)
console.log(found) //the first number greater than 3 is found at position 4

//Array.findIndex() --only the index of the first element that matches our search position will be returned
const greetings = ["hello","ahoj","dobre","goodbye","chau","hi"]

let foundIndex = greetings.findIndex(e => e === "hi") //checks the first index occurence of 'hi'
console.log(foundIndex) //returns '5'

//Array.some() and Array.every()
const nums = [1,2,3,4,5,6,3,8,9,67]

//some() checks if there is an occurence of an even number
const thereIsEven = nums.some(e => e%2 == 0)
console.log(thereIsEven)

//checks if only even numbers are available in the array
const eachIsEven = nums.every(e => e%2 == 0)//checks if every number is an even number
console.log(eachIsEven)


