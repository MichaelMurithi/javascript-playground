function data(){
    return [1,5,3,4,5,6,7]
}
var tmp;
var [
    first,
    second = 10,
    third,
    ...fourth
] =temp = data() || [];
var others =[];
for (let i = 0; i < fourth.length; i++) {
    others.push(fourth[i]);
}
console.log(others);
//Assignment done in an object
var o = {};
[
    o.first,
    o.second,
    o.third,
    ...o.fourth
] = data();
console.log(o);
//Destructuring into an array
//When arrays/objects are used, it is not valid to declare a var during destructuring
var numsArray = [];
[
    numsArray[0],
    ,//Second value skipped
    numsArray[2],
    ...numsArray[3]
] = data() || []; //an empty array provided incase a variable returns null
console.log(numsArray);

//When some middle parts of the data is to be left before structuring, a line is skipped.

//Example below for destructuring variables

var x,y;
    x = 10;
    y = 20;
[x,y] = [y,x]
console.log(`x: ${x} y: ${y}`); 

//Example below shows destructuring of nested arrays
function nestedData(data){
    return [3,4,[2,5,6],4,5,6]
}
var [
    first,
    second,
    [
        fourth,
        fifth,
        sixth
    ] =[],
    ...seventh
] = nestedData() || [];
console.log(`Nested Values are ${[fourth,fifth,sixth]}`)