/* Переменная содержит в себе число. 
Написать скрипт который посчитает факториал этого числа. */
let fact = 1;
let n = 5;
while(n > 0) {
    fact *= n; n--;
}
console.log(fact)