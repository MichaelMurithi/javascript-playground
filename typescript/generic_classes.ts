let array1:number[] = [1,33,23,45,65]
let array2:Array<string> = ['Kenya','China','Rusia']
class objectGenericsClass<TYPE1,TYPE2>{

    constructor(public value1: TYPE1,public value2:TYPE2){

    }
}

let object1 = new objectGenericsClass<string,number>("Hello",1245) //string and number take the place of 'TYPE1' and 'TYPE2'
let object2 = new objectGenericsClass<boolean,number>(true,3242) //boolean and number take the place of 'TYPE1' and 'TYPE2'

