const MultiplyBy2 = input => input*2;
const DivideBy2 = input => input/2;
const  Add2 =  input => input+2;
function copyArrayAndManipulate(array,instructions){
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }return output;
}
const myArray = [5,10,15,20];
console.log(copyArrayAndManipulate(myArray,MultiplyBy2));
console.log(copyArrayAndManipulate(myArray,DivideBy2));
console.log(copyArrayAndManipulate(myArray,Add2));