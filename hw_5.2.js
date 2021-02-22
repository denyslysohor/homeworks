let array = [343, 33, 4, 34, 325];
let result = array.every((x, i, a) => a.indexOf(x) == a.lastIndexOf(x));
console.log(result);
