/* Написать функцию, которая транспонирует матрицу. */
function transpose(matrix) {
  let matrixT = [];
  for(let x = 0; x < matrix.length; x++) {
    matrixT[x] = [];
    for(let y = 0; y < matrix[x].length; y++) {
      matrixT[x][y] = matrix[y][x];
    }
  }
  return matrixT;
}
console.log(transpose([[4, 4], [5, 5]]));
    
