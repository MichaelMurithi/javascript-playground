/** 
* Spread syntax allows an iterable such as an array expression or string to be expanded
 - Used in places where zero or more argument (for fucntion calls)/elements (for array literals) are expected
 - Used in an object expression to be expanded in places where zero or more key-value pairs(for object literals) are expected
 * Rest - its syntax looks like the spread parameter (...)
 -  It expands an array, while rest condenses multiple elements into a single one
 */

//Spread and rest operators
const veggie = ["tommato","cucumber","beans"]
const meat = ["pork","beef","chicken"]

const menu = [...veggie,"pasta",...meat]
console.log(menu)

//Old way of copying an array --not effective since a refference of the object is created and its copy
const newVeggie = veggie //this does not create a copy of the vegie array but instead create a reference of the array

veggie.push("peas")
console.log(veggie) // ["tomato", "cucumber", "beans","peas"]
console.log(newVeggie) // ["tomato", "cucumber", "beans","peas"]

//Using the spread operator to copy array elements in ES6
const spreadVeggie = [...veggie]
console.log(spreadVeggie) //In this case, spreadVeggie is a copy of the other array and not only a refference of the same

//Calling a function with an array of arguments
function getSum(...nums){ //passes the numbers as array of arguments
    let sum = 0
    for(const num of nums){
        sum = sum + Number(num)
    }
    console.log("The sum of the spread numbers is ",sum)
}
var nums = [0,1,2,3,4,5,6,7,10]

// using spread operator to pass the arguments
getSum(...nums)

//The spread operator in objects
let person = {
    name:"John",
    surname:"Murauki",
    age:20
}

let clone = {...person}

console.log("The persons clone using spread operator is ",clone)

//The rest parameter --condenses multiple elements into a single array

const runners = ["Tom","Paul","Mark","Luke"]
const [first, second,...loosers] = runners

console.log("The looses are ",loosers)