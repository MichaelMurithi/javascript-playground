var msg = "Hello World";
//(?=l) gets values followed by "l"
//(?!=o) gets values where the next letter is not o
//console.log(msg.match(/(Wo.)(?=l)/g)); //matches all the "l" with the after value as "o"
//console.log(msg.match(/(l.)(?!=o)/));

// Look after

//(?<e) checks for values which have "e" before them
//console.log(msg.match(/(?<=e)(l.)/g))
//console.log(msg.match(/(?<!e)(l.)/g))

//named capture groups <name> where name is the name of the capture group

// dotall when "/s" is added to the 

var text = `The quick brown
 fox jumps over the lazy dog` 
console.debug(text.match(/(brown.*over)/));
console.debug(text.match(/(brown.*over)/s))