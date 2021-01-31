/* Найти сумму цифр числа которые кратны двум. */
var n = 4347;
var sum = 0;
while (n > 0) {
    sum += ((n % 10))
    n = Math.floor(n/10)
}
if(sum % 2 === 0)
console.log(sum)
else {
    console.log("Введите другое число")
}