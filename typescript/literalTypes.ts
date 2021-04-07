/**
 * Combining literal types into unions to express functions that
 only accept a certain set of known values
 */

function printText(s:string,alignment:"left"| "right"| "center"){
    //The alignment parameter uses union to combine 3 arguments; "left","right" and "center"
    console.log(`Test ${s} printed in ${alignment}`)
}

printText("Hello, world","left")
// printText("Hello world","centre") // Raises an error since 'centre' is used instead of 'center'


