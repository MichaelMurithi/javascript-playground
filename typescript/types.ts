//String
let carName:string;

//Boolean
let isFast:boolean;

//number
let engine:number;

//any -- allows any data type to be assigned to the variable
let model: any = "Mercedes benz"

model = "123"; model = 123; //Any datatype can be assigned to the model since it is of type 'any'

//number[] --allows an array of numbers
let nums:number[] = [1,2,3,4,5,12,8,9,10]
console.log(`The array of numbers of type 'number[]' is ${nums}`)

//string[] --array of strings
let names:string[] = ["John","James","Johan","Kamau","Leah"]
console.log(`The array of names of type 'string[]' is ${names}`)


carName = "Range Rover"
isFast = true;
engine = 20.5;

console.log(`${carName} with engine ${engine} is ${ isFast ? 'fast' : 'slow'}`)