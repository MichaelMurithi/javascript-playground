/**
 * The string methods available in es6 are
 - indexOf() is used to get the first occurence of the specified value in a string
 * slice() pulls a specified part of a string as a new string
 * toUpperCase turns all characters of a string to uppercase
 * toLowerCase() turns all characters of a string to lowercase 
 * The 4 new string methods introduced in es6 are:
 - startsWith()
 - endsWith() - it is case sensitive
 - includes()
 - repeat()
 */

//  IndexOf()
const str = "This is a short sentence"
console.log("The index of 'short' in the string is ",str.indexOf("short"))

//slice()
const foods = "Pizza, orange, cereals"
console.log("A slice of the first 5 letters is ",foods.slice(0,5))

//toUpperCase()
const statement = "i ate an apple"
console.log("The statement to lowercase is",statement.toUpperCase())

//toLowerCase()
const string = "I ATE AN ORANGE"
console.log("String to lowercase is ,",string)

//startswith
const code = "ABCDEFG"

console.log(code.startsWith("ABB"))
console.log(code.startsWith("abc"))
console.log(code.startsWith("DEF",3)) //checks whether the code starts with the specified letters at the specified position

//endsWith
console.log(code.endsWith("EFG"))
console.log(code.endsWith("fg")) //returns false since endsWith is case sensitive

//includes() -- checks if our string includes the value we pass in
console.log(code.includes("ABB"))
console.log(code.includes("abc")) //false since includes is case sensitive

//repeat() --takes an argument that specifies the number of times we need to repeat the string
let hello = "hi"
console.log(hello.repeat(6))

