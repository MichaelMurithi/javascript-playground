/**
 * .padStart and .padEnd() --padStart() and padEnd() will go and fill the empty spaces
 - For example, applying a padding of 6 in a 5 letter word leaves a space of 1
* Object.entries(), Object.keys() and Object.values() --Used to access entries and values
* Object.values() -- returns an array containing all the values
* Object.keys() -- returns an array containing all the keys
* Object.getOwnPropertyDescriptors() -- It will return all the property descriptors of an object
- The attributes it can return are: (value,writable,get,set,enumerable,configurable)
* Now when writing objects, functions, we can leave commas at the end even if it is not the last one
* Atomic operations make sure that:
- Predictable values are written and read
- That operations are completed before the next operation starts
- That operations are not interrupted
* Atomics is not a constructor:
- All its properties and objects are shared
- We can therefore not use it with a new operator or invoke the atomics object as a function

* Atomics methods:
- add(), or(), xor()

*/

//Using padStart() to rightAlign test

const strings = ["short", "medium length","very long string"]

const longestString = strings.sort(str => str.length).map(str => str.length)[0];

strings.forEach(str => str.padStart(longestString)) //Will add spaces at the begining till the string length is equal to that of longestString

//Add custom test and numbers to padding
const name = "Javascript "
console.log(`Adding test 'learner' with a padEnd of 13: ${name.padEnd(17,'learner')}`)

console.log('1'.padStart(3,0)) //add '0' to the beggining of test '1' up to 3 spaces

//Object.keys()
const family = {
    father:"Michael GreatMan",
    mother:"Elizabeth Cate",
    daughhter:"Mary Wambui",
    son:"Ruka Kariuki"
}

console.log(Object.keys(family)) //Returns an array of keys from the family object

console.log(Object.values(family)) //Returns values from the family object

console.log(Object.entries(family)) //Returns a list of entries from the family object

console.log(Object.getOwnPropertyDescriptors(family))

//Trailing commas in functions
const object ={
    name:"My object",
    type:"Cool Object",
    display:function(){
        console.log(`My object name is ${this.name} and it is of type ${this.type}`)
    }
}
//Shared memory and atomics
