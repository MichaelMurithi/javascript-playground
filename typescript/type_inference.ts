/**
 * Typescript assumes the type of a variable based on the type of value that was stored in it initially
 - Trying to assign a different data type raises a warning due to its 'type inference'
 - It enables flexibility
 - Makes easy to run our code
 - Makes sure our code runs flexibly without any expected problem
 */

let car = {
    brand: "Mercedes",
    engine:5.5,
    manufacturer:"Tesla"
}
car.brand = 10 //raises an error since typescript infers variable car to be of type string

