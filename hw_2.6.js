/* Заданы две переменные для двух целых чисел, 
найти максимальное общее значение которое нацело делит два заданных числа. */
let num1 = 88;
let num2 = 96;
while (num2 > 0) {
    let result = num1 % num2;
    num1 = num2;
    num2 = result;
}
console.log(num1);