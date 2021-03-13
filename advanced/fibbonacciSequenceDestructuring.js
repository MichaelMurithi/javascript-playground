function fibbonaci(n){
    let a = 0;
    let b = 1;
    let values =[];
    values.push(a);
    values.push(b);
    for (let i = 0; i < n; i++) {
        let c = a + b;
        [a,b] = [b,c]; //destructuring used to swap the varriables
        values.push(c);
    }
    return values;
}
console.log(fibbonaci(5));