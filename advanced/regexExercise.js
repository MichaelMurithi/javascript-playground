var poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of a mind can learn
the power of anger can rage
inside untill it tears you apart
but the power of a smile
especcially yours can heal a frozen heart`;

function *powers(poem){
var re = /(?<=of )(?<thing>(?:a )?\w+).*?(?<=can )(?<verb>\w+)/gs;
var match;
while (match = re.exec(poem)){
    let{
        groups:{
            thing,
            verb
        }
    } = match;
    yield '${thing}:${verb}';
}
}
console.debug(powers(poem));