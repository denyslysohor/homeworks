/* Переменная хранит в себе единицу измерения одно из возможных значений 
(Byte, KB, MB, GB), 
Вторая переменная хранит в себе целое число. 
В зависимости от того какая единица измерения написать скрипт, 
который выводит количество байт. 
Для вычисления принимает счет
что в каждой последующей единицы измерения хранится 1024 единиц более меньшего измерения. */
let type = "KB"
let count = 4
let result = 0;
if(type === "KB") {
    result = (count * 1024) + " bytes";
}
if(type === "MB") {
    result = (count * (1024**2)) + " bytes";
if(type === "GB") {
    result = (count * (1024**3)) + " bytes";
} else if(type === "Byte") {
    }
}
console.log(result);
