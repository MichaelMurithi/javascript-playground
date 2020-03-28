//a default iteration on numbers splits the values from 0-100 increamenting by 1
var numbers ={
    *[Symbol.iterator](
        {
            start = 0,
            end = 100,
            step = 1
        } = {}
    ){
        for(let i  = start;i<end;i+=step){
            yield i
        }
    }
};
console.log(`My lucky numbers are ${[...numbers[Symbol.iterator]({start:6,end:30,step:2})]}`);