/* Найти номер столбца двумерного массива сумма которого является максимальной(Аналогично для строки). */
let matrix = [
    [6, 40, 0],
    [67, 0, 0],
    [0, -5, 0]
];
let resultOfCol = 0;
let sum = 0;
for(let i = 0; i < matrix[0].length; i++) {
    let sumOfCols = matrix.reduce((prev, current) => prev + current[i], 0);
     if (sum <= sumOfCols) {
         sum = sumOfCols;
         resultOfCol = i + 1;
     }

 }
let resultOfRow = 0;
let sum1 = 0;
for(let j = 0; j < matrix.length; j++) {
let summer = (matrix[j].reduce((sum, current) => { 
    return sum + current;
}))
 if(sum1 <= summer) {
     sum1 = summer;
     resultOfRow = j + 1;
 }
}
console.log("Hомер строки с максимальной суммой - " + resultOfRow);
console.log("Сумма - " + sum1);
console.log("Hомер столбца с максимальной суммой - " + resultOfCol);
console.log("Сумма - " + sum);
