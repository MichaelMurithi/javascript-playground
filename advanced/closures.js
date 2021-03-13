/*A function is being returned form the running of another function */
function createFunction(){
    let num = 20;
    function multiplyBy2(){
        return num*2;
    }
    return multiplyBy2;
}
const myFunction1 = createFunction();
console.log(myFunction1());
console.log(myFunction1());
const myFunction2 = createFunction();
console.log(myFunction2());
console.log(myFunction2());