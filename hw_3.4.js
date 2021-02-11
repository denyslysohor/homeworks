/* Написать функцию, которая суммирует две матрицы. */
function SumOfMatrix(matrix1, matrix2) {
    let resultM = [];
    for (let i = 0; i < matrix1.length; i++)
     { resultM[i] = [];
       for (let j = 0; j < matrix1[0].length; j++) {
       resultM[i][j] = matrix1[i][j] + matrix2[i][j];
       }
     }
    return resultM;
}
console.log(SumOfMatrix([[76, 45], 
                       [45, 45]], 
[[23, 54], 
[54, 54]]));
