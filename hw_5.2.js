let array = [343, 33, 4, 34, 325];
let result = array.every((item, i, arr) => arr.indexOf(item) == arr.lastIndexOf(item));
console.log(result);
