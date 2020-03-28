var str = "Hello";
var nums = [1,4,5,6,8,12,10];
var it1 = str[Symbol.iterator]();
var it2 = nums[Symbol.iterator]();
//efficient way of looping through an iterator.
for(let v of it1){
    console.log(v);
}
//The gather symbols ... can also be used to create an iterable like in the case below
var values = [...str]
console.log(values)