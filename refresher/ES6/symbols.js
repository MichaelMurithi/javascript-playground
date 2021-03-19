/**
 * Symbols are unique primitives introduced in es6
 - They can be used as identifiers for object properties
 - We will never have naming collisions with symbols since they are always unique
 - Symbols are not enumerable
 - We use Object.getOwnPropertySymbols(objectWithSymbols) to convert symbols into enumerable properties
 */

//creating a symbol
const me = Symbol("Michael")
const clone = Symbol("Michael")

console.log(me == clone) //false since symbols are unique
console.log(me === clone)//false since symbols are unique

//Issue with duplicate property values
const office = {
    michael:"CEO",
    michael:"founder",
    wambui:"CTO"
}

for(person in office){
    console.log(person)
}
//returns michael, wambui since we have repeated property values

//Using symbols
const officeWithSymbols = {
    [Symbol("michael")]:"CEO",
    [Symbol("michael")]:"founder",
    [Symbol("wambui")]:"CTO"
}

const symbols = Object.getOwnPropertySymbols(officeWithSymbols)
const positions = symbols.map(symbol => officeWithSymbols[symbol])

console.log(`The positions from with symbols are: ${positions} `)