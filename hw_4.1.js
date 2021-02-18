 let a = function ArrayGenerator(neg, pos) {
    let arr = [];
    let arrCount = pos + neg;
    let lim = arrCount + 1;
    for(counter = 8; counter > arr.length; counter--) { 
    for(let i = 0; i < neg; i++) {
        arr.push(Math.round(Math.random() * -10 * lim));
    }
    for(let j = 0; j < pos; j++) {
        arr.push(Math.round(Math.random() * 10 * lim));
    }
    if(arr.length > counter){
        return [];
        }

}
    return arr
}
console.log(a(4, 4));






