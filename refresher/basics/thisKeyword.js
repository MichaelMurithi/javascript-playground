/**
 * The value of the 'this' keyword depends on how a function is called
 * Scrict mode enables us to avoid accidentally refering to the window object 
 * Strict mode is turned on by writing 'use-strict' at the beggining of the Javascript file
 * By doing so, so, we enable a stricter set of rules for Javascript among which there is:
 - One that sets the value of the global Object to undefined instead of the window Object
 - The this keyword also becomes undefined
 - If we want to manually set the value of this to something we can use .bind
 * The .call() method can also be used to set the value of the 'this' keyword. It accepts a list of arguments
 * The .apply() method can also be used in plac of bind, but accepts a single array of arguments
 
 */

// In this case, 'this' refers to 'myUser' object
const myUser = {
    firstName: 'Michael',
    lastName:'Murithi',
    getName: function(){
        console.log(this.firstName + ' '+ this.lastName)
    }
}

myUser.getName()

//using the bind keyword
const myCar = {
    color:"red",
    getColor:function(){
        console.log(this.color)
    }
}

const unboundGetColor = myCar.getColor; //no object bounded to it
unboundGetColor() //In this case, the value returned is undefined since no car object is bound

const boundGetColor = unboundGetColor.bind(myCar)
boundGetColor() //In this case, the value returned is 'red' since the getColor object has a car bounded to it

/***** Using .call() and .apply() for function scopes ****/

// An object car
function Car(make,color){
    //Function car acts as a constructor
    this.carMake = make,
    this.carColor = color
}

//An object 'myCar' that binds additional properties to myCar
function MyCar(make,color){
    Car.call(this, make,color); //accepts a list of arguments and binds them to an object
    this.age = 5
    console.log(this)
}

const myNewCar = new MyCar('BMW','grey')
console.log(myNewCar.carMake)