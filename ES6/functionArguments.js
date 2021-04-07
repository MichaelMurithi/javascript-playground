/**
 * Prior to ES6, it was difficult to set default values to function arguments
 */
function getLocation(city,country,continent){
    if(typeof continent === 'undefined'){
        continent = 'Africa'
    }
    if(typeof country == 'undefined'){
        country = 'Kenya'
    }
    console.log(continent,country,city)
}

getLocation('Milan')

//Default function arguments es6
function calculatePrice(total,tax=0.1,tip = 0.05){
    return total + (total*tax) + (total*tip)
}
let price = calculatePrice(100,0.15)
console.log("The price with default tip and tax is, ",price)

/*** 
 * Solving default arguments with array destructuring
 * Destructuring is useful when we don't want to pass the parameters at all
 * When using destructuring, we make arguments to our functions an object
 * When calling the function, we don't have to worry about the order of the parameters
 - since the parameters are matched by keys
 *  */
function calculateDestructuredPrice({
    total = 0,
    tax = 0.1,
    tip = 0.05} = {})
    {
        console.log(total + (total *tax) +(total*tip))
    }

calculateDestructuredPrice({total:100,tax:0.2,tip:0.1})