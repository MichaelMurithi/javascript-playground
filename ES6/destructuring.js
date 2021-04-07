/**
 * Destructuring involves creating variables from objects
 * Destructuring can be used to swap variables
 * The ...rest operator is used to collect values remained after destructuring
 * With destructuring, default values can be provided in the resulting objects
 
 */

// Old way of creating variables from objects
var person = {
    first:"Alberto",
    last:"Murithi"
}

var first = person.first;
var last = person.last;

// console.log(first,last)

//for nested data
const user = {
    name:"Joshua",
    last:"Ndemange",
    job:"Architect",
    links:{
        social:{
            facebook:"https:www.facebook.com/albeto.montalesi"
        },
        website:"http://michaelmurithi.github.io"
    }
}

const {website} = user.links //we access the variable website by destructuring
const {facebook:fb} = user.links.social; //In this case we rename our variable 'facebook' to 'fb'
const {job:work = "Software developer"} = user //In this case, we rename the variable and provide a default value

console.log(work,fb,website)

// Array destructuring
const details = ["Michael","Murithi","Software developer"]
const [name,surname,job] = details

const someone = ["Duncan","Kobia","Pizza","Ice cream","Juice"]
const [first_name,last_name,...foods] =  someone //The syntax '...' is called the 'rest' operator

console.log(foods)
console.log(name,surname,job)

//Swapping variables with destructuring
let hungry = "yes";
let full = "no";

[hungry, full] = [full,hungry]
console.log(hungry,full)