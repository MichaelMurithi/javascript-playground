/**
 * 
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