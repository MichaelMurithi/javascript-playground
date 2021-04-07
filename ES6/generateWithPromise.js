/**
 * Promises are very useful for asynchronous programming
 - Combining them with generators produces a very powerful tool for asynchrounous programming
 - It helps us avoid issues like 'callbacck hell'
 - We wait for the promise to resolve and then pass the resolved value back to our generator in the next() call
 */

const myPromise = new Promise((resolve) =>{
    resolve("Our promise has been resolved")
})

function* gen(){
    let results = ""
    //returns promise
    yield myPromise.then(data =>{ results = data})
    //wait for the promise and use its value
    yield results + ' 2'

}

const asyncGen = gen()
const val1 = asyncGen.next()

val1.value.then(() =>{
    console.log(asyncGen.next())
})