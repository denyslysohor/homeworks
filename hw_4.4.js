let string = "KISS, Black Diamond, Epiphone, Epiphone Les Paul, kiss";
 
function WordSearcher(strEdit) {
strEdit = string.toLowerCase();
 
var array = [];
var alphabet= 'qwertyuiopasdfghjklzxcvbnm ';

for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
        if(alphabet[j] === strEdit[i]) {
            array.push(strEdit[i]);
        }
    }
}
strEdit = array.join('');
var array = strEdit.split(' ');
var obj = {};
array.forEach(function (el) { 
    if(el in obj) 
    obj[el]++;
    else {
         obj[el] = 1; 
        }
    });
 
Object.getOwnPropertyNames(obj).forEach(function (el) { 
    console.log(el.toUpperCase() + " встретилось - " + obj[el]); 
        }
    );
}
WordSearcher(string); 
