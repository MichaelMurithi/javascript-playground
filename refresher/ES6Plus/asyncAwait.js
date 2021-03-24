/**
 * To create an async function, we need to put the 'async' keyword
 - Async keyword tells js to always return a promise
 -The await keyword only works inside an async function
 - The await keyword will tell javascript to wait till the promise returns its results
 */

//Promise review
//Function walk returns a promise. The promise is resolved if the distance specified is not less then 500
function walk(distance){
    return new Promise((resolve,reject) => {
        if (distance < 500){
            reject("Oops! You ran a very small distance!")
        }
        setTimeout(() => resolve(`Nice, today you run ${distance} metres`),100)
    })
}

//Without async..await
function walkTheOldWay(){
     walk(1000).then(data =>{
            console.log(data)
            return walk(500)
        }).then(data =>{
            console.log(data)
            return walk(700)
        }).then((data) =>{
            console.log(data)
            walk(800)
        }).then((data) =>{
            console.log(data)
            walk(400)
        }).catch(err =>{
            console.log(err)
        })
}


//Using async...await
/**
 * function go() is an async function
 - 'await' keyword tells javascript to wait for responce before resolving the promise
 */
async function go(){
    const res1 = await walk(1000)
    console.log(res1)
    const res2 = await walk(800)
    console.log(res2)
    const res3 = await walk(700)
    console.log(res3)
    const res4 = await walk(500)
    console.log(res4)
    const res5 = await walk(400)
    console.log(res5)
}
// go()

//try...catch blocks used to catch errors in async functions
async function goSafely(){
    try{
        const res1 = await walk(600)
        const res2 = await walk(300)
        console.log(res1)
        console.log(res2)
    }
    catch(err){
        console.log(err)
    }
}

goSafely()