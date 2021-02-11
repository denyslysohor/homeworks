/* Переменная хранит в себе значение от 0 до 9. 
Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. 
Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. 
Реализовать с помощью функции. */
function calcValue (value) {
    if(value == 1) {
        console.log("Один");
    }
    if(value == 2) {
        console.log("Два");
    }
    if(value == 3) {
        console.log("Три");
    }
    if(value == 4) {
        console.log("Четыре");
    }
    if(value == 5) {
        console.log("Пять");
    }
    if(value == 6) {
        console.log("Шесть");
    }
    if(value == 7) {
        console.log("Семь");
    }
    if(value == 8) {
        console.log("Восемь");
    }
    if(value == 9) {
        console.log("Девять");
    }
    if(value == 0) {
        console.log("Ноль");
    } else if(value > 9 && value < 0) {
        console.log("Введите число из промежутка 0-9")
    }
}
calcValue(8);