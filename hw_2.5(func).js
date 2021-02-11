/* Найти минимальное число которое больше 300 и нацело делиться на 17.
Реализовать при помощи рекурсивной функции. */
function showDigit(num, divider) {
    num++;
    if(num % divider === 0) {
        return num;
    }
    return showDigit(num, divider);
}
console.log(showDigit(300, 17));