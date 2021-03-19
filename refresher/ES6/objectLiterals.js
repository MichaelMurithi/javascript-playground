const name ="Michael"
const surname = "Murithi"
const age = 25
const nationality = "Italian"

//Creating an object literal in ES6
//We reduce a lot of typing since const variables are named the same properties
const person = {
    name,
    surname,
    age,
    nationality,
}
console.log(person)

//Adding funtions to our objects
const user = {
    username:"user",
    password:"password",
    isValidUser:function(){
    return (this.username == "user" && this.password == "password")
    },
    //es6 way of adding functions in objects
    greet(){
      console.log(`Hello ${this.username}`)  
    }
}

user.greet()
console.log(user.isValidUser()," the user is valid")

//Dynamicall defining object propeerties in es5
var first_name = "myName"
var student = {}

student[first_name] = "Michael"

console.log(student.myName)

//Dynamically defining objects in es6
const lastName = "studentName"
const kid = {
    [lastName]:"Javascript learner"
}
console.log(kid.studentName)