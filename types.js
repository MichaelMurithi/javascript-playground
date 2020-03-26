 var v;
console.log(typeof(v));
v = "Myke";
console.log(typeof(v));
v = true;
console.log(typeof(v));
v = 2;
console.log(typeof(v));
v = {};
console.log(typeof(v));
v = Symbol();
console.log(typeof(v));
/*Negative zeros */
var trendRate = -1;
console.log(Object.is(trendRate,-1));
console.log(Object.is(trendRate,0));

/*Using the new KeyWord */
let yesterday = new Date("March 18,2020");
console.log(yesterday.toUTCString());