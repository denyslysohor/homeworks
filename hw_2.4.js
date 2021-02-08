/* Найти сумму цифр числа которые кратны двум. */
let num = "4347";
let sum = 0;
for(el of num) {
    if(el % 2 === 0) {
        sum += +el;
    }
}
console.log(sum);
