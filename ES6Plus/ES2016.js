/**
 * Array.includes(element,fromIndex)
 - Checks whether the array includes the passed element starting from the provided index
 - The new exponential operator ** is useful when we have long expressions
 */
const marks = [1,12,13,45,1,2,11,45,12,3,22,78,2,11,9]

console.log(marks.includes(3,2))// Checks whether the marks array includes 3 starting from index 2

//Exponential prior to es6
console.log(Math.pow(2,2)) //raise 2 to power 2

//New exponential operator
console.log(`Raising 2 to power 2 with the new exponential operator gives ${2**2}`)

//Exponential operator with long expressions
console.log(`Raising 2 to power of 2 twice gives: ${2**2**2}`)