/**
 * TYPE is used to declare generics type
 * @param someData 
 * @returns 
 */

function displayData<TYPE>(someData: TYPE){
    let someOtherData: TYPE
    return someData;
}

console.log(displayData("Hello string parameter"))
