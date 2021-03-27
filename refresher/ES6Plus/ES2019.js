/**
 * .flat() and .flatMap()
 * .flat() will flat the array recursively up to the specified depth
 - If no depth is specified, 1 is the default value
 - We can use infinity to flatten all the nested arrays
  
 */

const letters = [ 'a','b',['c','d',['e','f']]]
console.log(letters.flat())