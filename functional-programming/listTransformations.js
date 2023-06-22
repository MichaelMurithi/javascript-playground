//map() transformation takes in a callback function with which to transform each element in an array
//.map() transformation practice:
var array = [1,2,3,4,5,6,7,8,9,10];
function addOne(arr){
 return array.map(function (v){
    return v + 1 //each element "v" in an array is added 1
})};
console.log(addOne(array));
//.sort() takes a callback function to act as a sorting argument
function sortNumsAsc(array){//sorts numbers in ascending order
    return array.sort((x,y)=>y-x)// callback arrow function takes arguments (x,y) and returns values of y>x
}
console.log(sortNumsAsc(array));

//.filter() takes a callback function/predicate as an argument and returns an array that meets the specified conditions
function isEven(num){
    return num%2 ==0;
}
//filters an array and returns even numbers
function filterEven(array){
    return array.filter(isEven);
}
console.log(filterEven(array));

//Reduce() takes in three arguments; reducer function, initial value and the array to be operated upon
