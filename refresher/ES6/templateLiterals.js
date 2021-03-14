/**
 * Template literals article: https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761?gi=a96b41bbacfd
 */

//String interpolation in es5
var name = "Michael"
var greeting = `Hello, my name is ` +name;

console.log(greeting)

//String interpolation in es6
let guest = "Javascript Leaner"
const salamu = `Hello my name is ${name}`

console.log(greeting)

//Using es6 to write multiline strings
const content = `Hello
this is how write multiline strings in es6. 
Its really amazing that you know. 
`
console.log(content)

//Ternary operator
const isDiscounted = false;

function getPrice(){
    console.log(isDiscounted ? "$10": "$20")
}
getPrice()

/** Creating a template with ternary operators */
let artist = {
    name: "Bon Jovi",
    age:56,
    song:'Love yourself'
}

//only if the artist object has a song property, we add it to one paragraph, otherwise we return nothing
const text = `
<div>
<p> ${artist.name} is ${artist.age} years old ${artist.song ? `and wrote the song ${artist.song}`: ''}</p>
</div>
`
console.log(text)

//Tagged template literals
/**
 * By tagging a function to a template literal, we can run the template literal through the function providing it with everything
 * You take the name of your function and put it infront of the template you want to run against it
 * 
 */

let person = "Alberto"
let age = 25

function myTag(strings,personName,personAge){
    let str = strings[1];
    let agestr;

    personAge > 50 ? agestr = "grandpa" :agestr = "youngster"

    return personName + str + agestr
}

let sentence = myTag`${person} is a ${age}`
console.log(sentence)