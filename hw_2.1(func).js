/* Переменная содержит в себе строку. Вывести строку в обратном порядке.
Реализовать при помощи рекурсивной функции. */
function inverse(str) {
    if(str.length === 0){
       return "";
    } else { 
        return inverse(str.slice(1)) +str[0];

}
}
  console.log(inverse("KISS"));