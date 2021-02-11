let matrix = [
    [6, 4, 10],
    [1, 4, 0],
    [10, -5, 0]
];
let result = matrix.filter(arr => {
    return (arr.reduce((i, j) => i + j, 0) < 0) || arr.some(n => n === 0)
})
console.log(result)