/* Написать функцию, которая транспонирует матрицу. */
function transpose(matrix) {
  let matrixT = [];
  for(let i = 0; i < matrix.length; i++) {
    matrixT[i] = [];
    for(let j = 0; j < matrix[i].length; j++) {
      matrixT[i][j] = matrix[j][i];
    }
  }
  return matrixT;
}
console.log(transpose([[4, 4], [5, 5]]));
    
