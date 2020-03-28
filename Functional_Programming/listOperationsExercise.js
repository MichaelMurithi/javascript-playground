//Qi: Create two functions that returns two different values
function five(){return 5};
function nine(){return 9};

function add(n1,n2){
    return n1 +n2
}// adds two numbers
console.log(add(five(),nine())); //tests the above functions

function add2(f1,f2){ //takes two functions and returns a sum of their execution
    return add(f1(),f2());
}
console.log(add2(five,nine));//tests the add2() function

function createNumber(num){
        let n = num;    
    return function returnNum(){
        return n;
    }
};
var five = createNumber(5);
var three = createNumber(3);
var four = createNumber(4);

var numbers = [1,1,2,3,3,4,5,5,6,7,7,8,9,9,10];
var uniqueNums = numbers.reduce(function unique(newList,num){
      if  (!newList.includes(num)) return [...newList,num];
      return newList
},[]);

console.log(uniqueNums);