/* Задан двумерный массив,
объединить каждый внутренний массив с верхнем массивом,
только по уникальным значениям. */
let array = [1, 2, 4, [8, 4, 12], [13, 29, 11], [0, 5, 3, 11], 5, 6, 7, [3, 8, 21], 3];
let uniqueArray = array.flat();
function uniqueValues(array) {
    let result = [];
    for(let i = 0; i < uniqueArray.length; i++) {
        for (let el of uniqueArray) {
            if (!result.includes(el)) {
              result.push(el);
            }
          }
        
          return result;
    }
}
console.log(uniqueValues(uniqueArray));
