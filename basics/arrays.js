/**
 * Arrays stpre values in order
 * We can access array values via their index. Arrays start at position 0
 * Refference article:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
const fruitBasket = ['apple','banana','orange']

//get the length of the array
console.log(fruitBasket.length)

//add a new value to the end of the array
fruitBasket.push('berries')
console.log(fruitBasket)

//add a new value at the beggining of an array
fruitBasket.unshift('pineapple')
console.log(fruitBasket)

//remove a value from the end of the array
fruitBasket.pop()
console.log(fruitBasket)

//remove a value from the beggining of an array
fruitBasket.shift()
console.log(fruitBasket)