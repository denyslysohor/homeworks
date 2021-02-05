/* Переменная хранит в себе значение от 0 до 9. 
Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. 
Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. 
Реализовать двумя способами. 1-ый способ. */
let num = prompt("Введите число: ");
switch(num) {
case "1":
    console.log("Один");
    break;
case "2":
    console.log("Два");
    break;
case "3":
    console.log("Три");
    break;
case "4":
    console.log("Четыре");
    break;
case "5":
    console.log("Пять");
    break;
case "6":
    console.log("Шесть");
    break;
case "7":
    console.log("Семь");
    break;
case "8":
    console.log("Восемь");
    break;
case "9": 
    console.log("Девять");
    break;
case "0":
    console.log("Ноль");
    break;
default:
    console.log("Введите число, которое входит в промежуток 0-9");
}
