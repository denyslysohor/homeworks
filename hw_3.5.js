/* Найти номер столбца двумерного массива сумма которого является максимальной. */
let matrix = [
    [6, 4, 10],
    [6, 949, 0],
    [10, -5, 0]
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
 console.log("Hомер столбца с максимальной суммой - " + resultOfCol);
console.log("Сумма - " + sum);