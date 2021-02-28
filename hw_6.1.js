var countOfLinks = document.querySelectorAll("a").length;
console.log(countOfLinks + " - количество ссылок на странице");
var displayer = document.querySelectorAll("a").forEach(element => console.log(element));