/**
 * Callback hell - happens when we try to write asynchronous code as if it were synchronous
 - Happens when we try to chain each blco of code one after the other
 * Trying to write our code in a way where execution happens from top to bottom causes excessive nesting of functions
 - It results to 'callbackhell' which can be viewed here: http://callbackhell.com/
 * Classes will help us escape callback hell and improve our code
 * A promise is an object representing the eventual complesion or failure of an assynchronous operation
 * Promise.resolve() and Promise.reject() will take promises that automatically resolve or reject
 -They take 2 arguments, one function that gets called when the promise is resolved and
  Another function that gets called when the promise is rejected.
  - In Promise.resolve(), the second function is not called while in Promise.reject(), the first function is not called
  * Promise.all() -- Returns a single promise that resolves when all promises have been resolved
 * Promise.race() 
 - Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects with the value from that promise

  */

//creating a promise
 const myPromise = new Promise((resolve,reject) =>{
     setTimeout(() => {
        resolve("The value we get from the promise")
     },2000)
    //throws an error when the promise is rejected.
     setTimeout(() =>{
         reject(Error("Oops! Unfortunately we can't fulfil the promise!"))
     },3000)
 })

myPromise.then((data) =>{
    console.log(data)
})
.catch(error =>{
    console.log(error)
})


//Promise chaining
const coolPromise = new Promise((resolve,reject) =>{
    resolve()
})

coolPromise.then((data) =>{
    return 'working'
})
.then((data) =>{
    console.log(`${data} was returned from the previous promise`)
    throw 'Sorry, we need to end this promise chain now!'
})
.catch(error =>{
    console.log(error)
})


//Using Promise.resolve()
Promise.resolve("Successful. This promise is automatically resolved").then(function(data){
    console.log(data) //this will be performed since the promise is set to automatically resolve
},
function(error){
    console.log(error)
}
)

//Promise.reject
Promise.reject("This promise is automatically rejected").then(function(data){
    console.log("This cannot be called since the promise is automatically rejected")
},function(data){
    console.log(data)
})

//Promise.all()
const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("Promise 1 resolved after 5s")
    },5000)
})
const promise2 = new Promise(() =>{
    setTimeout(() =>{
        console.log("Promise 2 resolved after 10s")
    },10000)  
})

// Promise.all([promise1, promise2]).then((data) =>{
//     const [promise1data,promise2data] = data
//     console.log(promise1data,promise2data)
// })

//Promise.race() -- returns a value from the fastest promise
Promise.race([promise1,promise2]).then((value) =>{
    console.log(value) //promise1 gets resolved since it is faster
}) 