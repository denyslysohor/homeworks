/* Переменная хранит в себе значение, 
напишите скрипт которое выводит информацию о том, 
что число является нулевым либо положительным либо отрицательным.
Реализовать при помощи функции. */
function showInfo(num) {
if(num > 0) {
    console.log("Число " + num + " положительное");
} else if(num < 0) {
    console.log("Число " + num + " отрицательное");
} else {
    console.log("Число нулевое");
}
}
showInfo(80);