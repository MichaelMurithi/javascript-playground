var obj = {
    a:1,
    b:2,
    c:3,
    
    *[Symbol.iterator](){//a method is created to iterate
        for(let key of Object.keys(this)){
            yield key;
        }
    }
};
