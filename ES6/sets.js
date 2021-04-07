/**
 * A set is an object where we can store unique values of any type
 - set.add() is used to add values to a set
 * A set does not have keys so calling .keys() we get the same value as .entries() and .values()
 
 * There are 2 ways of iterating over a set:
 - using .next()
 - using a for..of loop

 * We can use a set to remove duplicates from an array since we know it can only hold unique values
 - The new array will contain only the unique values from the original array
 */

const family = new Set()

family.add("Dad")
family.add("mom")
family.add("son")
family.add("son") //Trying to add a new 'son' fails since values must be unique
console.log(family)

//Set methods
const courses = new Set(['ECE','EEE','CS'])

//Set.size
console.log(`The number of unique courses is ${courses.size}`)

//Set.keys()
console.log("The key of courses are, ",courses.keys())

//Set.entries()
console.log("The entries available in courses are ",courses.entries())

//Set.values()
console.log("The values available in courses are ,",courses.values())

//removing values .delete()
courses.delete("EEE")
console.log("The remaining courses after deleting are, ",courses)

//Removing all the courses
// courses.clear()
// console.log("Oops!, 'clear' has removed all the courses and now we have only",courses)

//Looping over a set

//Using .next()
const iterableCourses = courses.values()

console.log(iterableCourses.next())
console.log(iterableCourses.next())

//using a 'for of' loop
for(const course of courses){
    console.log(courses)
}


//Removing duplicates from an array
const myArray = ["dad","mom","son","dad","mom","daughter"]

const set = new Set(myArray)
console.log(set)

const uniqueArray = Array.from(set) //Create array from the set
console.log(uniqueArray)

