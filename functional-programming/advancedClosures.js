//advanced clpsure concepts.
//closures is when a function remembers values even when executed elsewhere
function strBuilder(str){
    var string = str;
    return function(str){
        return function(arg){
            if (arg == undefined){
               return string + str;
            }
            else return function(){
               return string + str + arg
            }
        };
    }
}

var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();
//7console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello() === "Hello, ");
console.log(kyle() === "Hello, Kyle");
console.log(susan() === "Hello, Susan");
console.log(question === "Hello, Kyle?");
console.log(greeting === "Hello, Susan!");