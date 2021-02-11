/* Написать функцию, которая транспонирует матрицу. */
function transpose(matrix, width, heigth) {
  let matrixT = [];
  for(let x = 0; x < width; x++) {
    matrixT[x] = [];
    for(let y = 0; y < heigth; y++) {
      matrixT[x][y] = matrix[y][x];
    }
  }
  return matrixT;
}
console.log(transpose([[4, 4], [5, 5]], 2, 2));
    