/*Function to validate a name */
function isValidName(name){
    if(typeof(name)!="string"){
        return false;
    }else if(name ==0){
        return false;
    }else if(name.search(" ")!=-1 || !(name.length>=3)){
        return false;
    }
    else {return true};
}
console.log(isValidName("frank"));
/*Function to validate the hours attended*/
function hoursAttended(attended,length){
    if(
        typeof(attended)=="string"&&
        attended.trim() ==""
    ){
        attended = Number(attended)
    }
    if(
        typeof(length)=="string"&&
        length.trim() ==""
    ){
        length = Number(length)
    }
    if(
        attended>0 &&
        length>=0 &&
        Number.isInteger(attended)&&
        Number.isInteger(length) &&
        attended<=length
    ){
        return true
    }
    return false
}
console.log(hoursAttended(6,""));