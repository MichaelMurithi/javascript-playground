/**
 * A weakset is similar to a set but it can only contain objects
 - A weakset cleans itself up after we delete an element from it
 * When an object is removed from a weakset, garbage is cleaned immediately
 - This happens because the reference to an object is lost when we set a value to null
 */

let dad = {name:"Daddy",age:50}
let mom = {name:"Mummy",age:45}

const family = new WeakSet([dad,mom])

// for(const person of family){
//     console.log(person)
// }

dad = null
console.log(family)