//There are new array methods introduced in ES6+
//array.find(); It takes a callback to define means of getting values from an array:
var arr = [{a:1}, {a:2}];
console.log(arr.find(function(v){
 return v && v.a>1;
}));

console.log(arr.find(function(v){
    return v && v.a>10; //defines the value to be returned and the condition
}));

//It returns -1 where a values is notavailable and the index where the value is available 
console.log(arr.findIndex(function(v){
    return v && v.a>10;
}));

// .includes(a,b) takes two parameters, parameter a is the value to look for and b can be used to define the index where to find the value
var arr1 = [10,20,NaN, 30, 40,50];
console.log(arr1.includes(10,0));

// .flat() it is used to convert nested array into unnested arrays
var nestedValues = [1,[2,4],6];
//console.log(nestedValues.flat());
console.log(nestedValues.map(function(v){
    return [v*2, String(v*2)]
}));