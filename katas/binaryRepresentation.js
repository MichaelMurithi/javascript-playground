/**
 * Write a funtion that takes an integer as input and returns the number of bits 
 that are equal to one binary representation of thet number.
 Steps:
 1. Take an integer as input
 2. Get Binary representation of the number
 3. Count the number of bits
 4. REturn the number of bits
 **The input is guaranteed to be non-negative
 */

function bitsFunction(int){
    // Get binary representation of the number

    //Count the number of bits

    //Return the number of bits
}

function convertToBinary(num){
    const binary = num.toString(2).split()
    let bits = []
    console.log(binary.length)
    for (let i =0; i < binary.length; i++){
       console.log("yes")
        // if (parseInt(digit) == 1) {
        //     bits.push(digit)
        // }
    }
    console.log(bits)
}

convertToBinary(10)