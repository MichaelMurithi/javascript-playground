/**
 * Javascript is a dynamic language
 * You don't have too define the type of the variables when you define them
 * A primitive is simply a data type that doesn't have methods
 * They are: string, number, boolean, null, undefined, symbol
 * 
*/
//**__________Primitive data types__________ */
//Strings used to represent text data
let username = "Wekulo"

const car = {
    wheels:4,
    owner:'Michael',
    color:'blue',
    type:'Ferrari',
    drive: function(){
        console.log(this.owner,"Sorry, you drove to the wrong room")
    }
}

car.drive()

//Creating objects using 'new' keyword
const person = new Object()
// Creating objects using object literal
const student = {}

//dot notation is used to add new properties to objects
person.age = 90
person.name = "Michael"
person.country = "Kenya"

//Accessing properties from objects
console.log('The person is called',person['name'])
console.log('The person comes from',person.country)

/**
 * Incase of multiword properties, we cannot use dot notation
 * When using multiword properties, the should be wrapped in quotation marks and they're only accessible in bracket notation
 * Bracket notation is used to access properties of an object by its keys
 * 
 */

// Bracket notation is used when we want to access an object property from a predefined variable
const cars = {
    ferrari:"Carlifornia",
    porshe:"China",
    bugatti:"India"
}
const key = 'ferrari' //user input
console.log(cars[key]) //accesing the variable from a dynamic key stored in a variable

//************* Copying objects **************/
/** 
 * Objects are copied by reference. The second object will simply store an address to the car and not the Object itself
 *  Only a comparison between the same object returns true
 * A quick way of making a clone of an object in Javascript is to use Object.assign
 * 
*/
let secondCar = car
car.wheels = 4

//the same output is given in both cases
console.log(car)
console.log(secondCar) 

//Comparing the two objects
console.log(car == secondCar)
console.log(car === secondCar)

//Using Object.assign to make an object clone
const benz = {
    size:"Big",
    fuel:"Diesel",
    make:"MX601"
}

const advancedBenz = Object.assign({},car,benz) //copies all the properties of user and car to second user
console.log(advancedBenz)



