/*
* Async operator is much like an object except that:
- Its next method returns an object for a {value, done} pair
- We use a for..await..of loop which works by converting our iterables into a promise unless they are already one.
- .finally() will return a promise so we can chain more 'then' and 'catch' after it.

*/

const iterables = [1,2,3,4]

async function test(){
    for await (const value of iterables){
        console.log(value)
    }
}

//Finally
const myPromise = new Promise((resolve, reject) =>{
    resolve()
})
myPromise.then((result) =>{
    console.log(`Still working...`)
}).catch((err) =>{
    console.log("There was an error")
}).finally(() =>{
    console.log("Done")
    return "We can chain more promises"
}).then((result) =>{
    console.log(result)
})