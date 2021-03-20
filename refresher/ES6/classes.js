/**
 * Classes are syntatic sugars for prototypal inheritance in Javascript
 * There're 2 ways of creating a class:
 - Class declaration,
 - class expression
 * Both class declaration and class expression are not hoisted, you need to declare your class before you access it
 - To create a class, a constructor method is needed
 - Only one constructor should be added, else a SyntaxError is thrown
 * Static methods are only accessible within the class definitions
 - They are not available for a every class instance
 * We can use setters and getters to set and get values inside our class
 * 'extends' keyword is used if we want to have a new class that inherits from a previous one
 * When we 'extend' a class, we must call super() method with the variable inherited from the parent class
 * 
 */

//Prototypal inheritance
function Person(name, age){
    this.name = name
    this.age = age
}
//A new method greet is added to the proptotype to make it available to all instances of 'person' that we create
Person.prototype.greet = function(){
    console.log(`Hello, ${this.age} years old ${this.name}. Greetings from function prototype`)
}

const wekulo = new Person("Duncan",26)
const carol = new Person("Wambui",20)

wekulo.greet()
carol.greet()


//es6 class
class Student{
    constructor(name,course){
        this.name = name
        this.course = course
    }
    //Static methods are only accessible by the class itself.
    static info(){
        console.log("I am info only available within the student's class")
        console.log("-----------------------------------------------------")

    }
    set courseName(value){
        this.course = value;
        console.log(this.name)
    }
    get courseName(){
        console.log(`Your course is ${this.course}`)
    }
    learn(){
        this.info
        console.log(`My name is ${this.name}, and I am learning ${this.course} from an ES6 class`)
    }
    greet(){
        this.info
        console.log(`Hello ${this.name} from ES6 class`)
    }
}


const john = new Student("John Makau","Javascript")
john.greet()
const wairimu = new Student("Virginia Wairimu","Catering")
wairimu.learn()

john.coursename = "Web development" //calls the setter
john.coursename //calls the getter

class MastersStudent extends Student{
    constructor(name,course,year){
        super(name,course);
        this.year = year
    }
    set projectName(value){
        this.project = value
    }
    get projectName(){
        console.log(`${this.name} is doing ${this.project}`)
    }

}

const duncan = new MastersStudent("Duncan","Business management","2013")
duncan.projectName = "Business management strategies"
duncan.projectName

//Extending arrays
class Classroom extends Array{
    constructor(name,...students){
        super(...students)
        this.name = name
    }
    add(student){
        this.push(student)
    }
}


const myClass = new Classroom('1A',
    {name:"Tom",course:"Medicine",age:15},
    {name:"Johan",course:"Engineering",age:20},
    {name:"Ken", course:"Business management",age:30}
)

for (const student of myClass){
    console.log(student)
}