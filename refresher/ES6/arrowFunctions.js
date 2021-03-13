/**
 * fat arrows are used to declare arrow functions
 * When using arrow functions, the 'this' keyword inherits from the parent scope
  
 */

//es5 function declaration 

let learner = 'Javascript Learner'

const morningGreeting = function(name){
    console.log(`Good morning ${name}. Greetings from es5!`)
}
morningGreeting(learner)

//es6 arrow function syntax
const lunchGreeting = (name) =>{
    console.log(`Hello ${name} greetings from es6 with parenthesis!`)
}
lunchGreeting(learner)

//without parentheseis if only one parameter is available
const afterGreeting = name =>{
    console.log(`Good afternoon ${name} greetings from es6 without parenthesis!` )
}
afterGreeting(learner)

//If we have no parenthesis, we need to write empty parenthesisi like this
const nightGreeting = () =>{
    console.log(`Hello, have a good night though I dont know your name!`)
}
nightGreeting(learner)

/** *****************Implicitly return***************** */

// With arrow functions, we can skip implicit return
const implicitGreeting = name => `Hello implicit ${name}`
implicitGreeting(learner)


//To return an object literal
const race = "100m dash"
const runners = ["Eliud Kipchoge", "Eliud Kimaiyo","Isaac Kipsanga"]

//To return object literals from an array
/**
 * In the results below, we are using the map function to iterate over the array of learners
 * The first item is the current item in the array and i is the index of it
 * For each item in the array , we're then adding into results an object containing properties like name, race and place
 * We wrap everything inside a curly bracket to tell js what is inside is an 'object literal'
 * Writing race or race:race is the same
 */

const results = runners.map(
    (runner,i) => (
        {name:runner, race, position:i+1}
        )
    )

console.log(results)

//In this case 'this' keyword refers to the person object
const person1 = {
    age:10,
    grow: function (){
        this.age++
        console.log(this.age)
    }
}

person1.grow()

// In this case 'this' checks the global scope
const person2 = {
    age:18,
    grow: () =>{
        this.age++
        console.log(this.age)
    }
}

person2.grow() //returns NaN because because age is not defined in the global scope


/********** Accessing the functions' argument's list 
 * 
 - Arguments lists can be accessed inside an arrow function only using the **args keyword
 - Trying access using arguments keyword returns undefined since arrow functionsn check in the global scope
 * *****/
const showWinner = (...args) => {
    const winner = args[0];
    console.log(`${winner} was the winner`)
}
showWinner("Usain Bolt","Justin Gatlin","Asafa Powell")

//accessing argument's list inside normal function
const displayWinner = function(){
    const winner = arguments[1]
    console.log(`${winner} was the winner`)
}
displayWinner("Eliud kimaiyu","Julius Mustafa","Kubwa Mdogo")
