/* Переменная содержит в себе строку. Вывести строку в обратном порядке. */
let str = "KISS";
let strReverse = "";
for(let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
}
console.log(strReverse)