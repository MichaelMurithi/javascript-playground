/*Template Strings help in  advanced string concatenation */
var trainer = 
{name:"Myke", 
email:"mykemitrichev@gmail.com",
title:"trainer",
course:"Recent Javascript"
};
var str = " Myke "
//padStart() adds padding at the beginning of the string
console.log(str.padStart(10,"*"));
//padEnd() addds padding at the end of the string. Takes 2 parameters, total number of characters expected and the [characters to be added]
console.log(str.padEnd(10,"*"));
//trimStart() removes spaces at the beginning of the string
console.log(str.trimStart());
//trimEnd() removes spaces at the end of the string
console.log(str.trimEnd());
/*
var mess = `Welcome to this course! your  ${trainer.title}`
console.log(mess)
function upper(strings,...values){
    let str = [];
    for (let i = 0; i< strings.length; i++) {
            str.push(strings[i].toUpperCase())
    }
    return str
}
console.log(upper("Myke"));
*/
