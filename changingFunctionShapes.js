//A flip higher order funtion takes a funtion with arguments in order x,y and changes to order y,x
function flip(fn){
    return function(arg1,arg2,...args){
        return fn(arg2,arg1);
    }
}
function toBeFlipped(arg1,arg2){
    return [arg1,arg2]
}
//creating a function to return flipped arguments
var flipped = new flip(toBeFlipped);
console.log(toBeFlipped(2,3)); //returns arguments in the order they're passed

console.log(flipped(2,3)); //returns a arguments in a different order.

/**A spread higher order function returnas a function with spread arguments */

function spreadArgs(fn){
    return function spread(args){
        return fn(...args)
    }
}

function toBeSpread(x,y,z,w){
    return x+y+z+w
}

var alreadySpread = spreadArgs(toBeSpread);
console.log(alreadySpread([1,2,3,4]));
