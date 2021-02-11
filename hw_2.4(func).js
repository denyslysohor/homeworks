/* Найти сумму цифр числа которые кратны двум.
Реализовать при помощи функции. */
function SumDigits(num) {
    let sum = 0;
    if(num === "")
    return 0;
    let digits = num.split("");
    digits.forEach(digit => {
        if(digit % 2 === 0)
        sum += +digit
    });
    return sum;
}
console.log(SumDigits("2324"));

