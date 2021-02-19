function ArrayGenerator(neg, pos) {
    let arr = [];
    let countNeg = 0; // Счетчик для отрицательных чисел.
    let countPos = 0; // Счетчик для положительных чисел.
    let percentageNeg = 0;
    let percentagePos = 0;
    let arrCount = pos + neg; // pos - положительные числа, neg - отрицательные.
    let lim = arrCount + 1;
    
    for(let k = 4; k > arr.length; k--) { 
    for(let i = 0; i < neg; i++) {
        arr.push(Math.round(Math.random() * -10 * lim));
        countNeg++;
    }
    percentageNeg = (countNeg * 100) / k;
    console.log(percentageNeg + "%");
    for(let j = 0; j < pos; j++) {
        arr.push(Math.round(Math.random() * 10 * lim));
            countPos++;
    }
    percentagePos = (countPos * 100) / k;
    console.log(percentagePos + "%");

    if((neg + pos) > k){
        return [];
        }
}
   return arr;    
}
    console.log(ArrayGenerator(2, 2))

