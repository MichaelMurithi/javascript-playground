/**
 * The for...of iterates by using a variable of a collection
 *  The for..in loop iterates over all the enumerable properties of an object
 - When using a for--in loop, it is suggested not to add, modify or delete properties of an object during iteration
 - There is no guarantee that properties will be visited before/after being modified
 - for..in returns a list of keys
 - for..of returns a list of values
 */

//Old array iteration
var fruits = ["apple","banana","orange"]

for (var i = 0;i < fruits.length;i++){
    console.log(fruits[i])
}

//for..of loop
const juices = ["apple","banana","orange"]
for(const fruit of fruits){
    console.log(fruit)
}

//iterating over an object
const car = {
    maker:"BMW",
    color:"red",
    year:"2020",
}

for (const prop of Object.keys(car)){
    const value = car[prop]
    console.log(prop,value)
}

//for...in
for (const prop in car){
    console.log(prop,car[prop])
}
