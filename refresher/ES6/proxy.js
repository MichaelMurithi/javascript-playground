/**
 * The proxy object is used to define custom behaviour for fundamental operations
 - Property lookup
 -assignment
 -enumeration
 - function invocation
 
 * A handler is an object which will define the behaviour of our proxy when an object is defined on it
 * Target can be anything from; an object, a function or another proxy
 * 
 */

const dog = {breed:"German Shepherd",age:5}

const dogProxy = new Proxy(dog,{
    //When we call the 'get' method, we step in the flow and change the value of the breed to uppercase
    
    get(target,breed){
       return target[breed].toUpperCase()
    },
    set(target,breed,value){
        console.log("Changing target breed to....")
        target[breed] = value
    }
})

console.log(dogProxy.breed)
console.log(dogProxy.breed = "Slovak")