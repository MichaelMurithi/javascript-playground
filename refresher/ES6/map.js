/**
 * A map is similar to a set but they have key/value pairs
 * A WeakMap is similar to a weakset
 - The keys are weekly refferenced which means that when the value is lost, the value will be removed from the weakmap and garbage collected
 * A WeakMap is not enumerable and therefore we cannot loop over it
 
 */

const family = new Map()

family.set("dad",40)
family.set("mom",35)
family.set("son",15)

console.log(family)

family.forEach((val,key) => console.log(val,key))

//Weakmap
let dad = { name: "Daddy" };
let mom = { name: "Mommy" };

const myMap = new Map();
const myWeakMap = new WeakMap();

myMap.set(dad);
myWeakMap.set(mom);

dad = null;
mom = null;

console.log(myMap);
// Map(1) {{…}}
console.log(myWeakMap);
// WeakMap {}