function ArrayGenerator(neg, pos) {
    let arr = [];
    let count = 0;
    let count1 = 0;
    let percentageNeg = 0;
    let percentagePos = 0;
    let arrCount = pos + neg;
    let lim = arrCount + 1;
    for(let k = 4; k > arr.length; k--) { 
    for(let i = 0; i < neg; i++) {
        arr.push(Math.round(Math.random() * -10 * lim));
        count++;
    }
    percentageNeg = (count * 100) / k;
    console.log(percentageNeg + "%");
    for(let j = 0; j < pos; j++) {
        arr.push(Math.round(Math.random() * 10 * lim));
            count1++;
    }
    percentagePos = (count1 * 100) / k;
    console.log(percentagePos + "%");

    if((neg + pos) > k){
        return [];
        }

}
   return arr;
    
}
    console.log(ArrayGenerator(2, 2))

