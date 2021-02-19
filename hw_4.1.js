function ArrayGenerator(neg, pos) {
    let arr = [];
    let arrCount = pos + neg; // pos - положительные числа, neg - отрицательные.
    let lim = arrCount + 1;
    for(let k = 8; k > arr.length; k--) { 
    for(let i = 0; i < neg; i++) {
        arr.push(Math.round(Math.random() * -10 * lim));
    }
    for(let j = 0; j < pos; j++) {
        arr.push(Math.round(Math.random() * 10 * lim));
    }
    if(arr.length > k){
        return [];
        }

}
    return arr;
}
console.log(ArrayGenerator(4, 4));





