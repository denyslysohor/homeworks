/* Дано число - вывести первые N делителей этого числа нацело. */
let num = 12;
let divider = 0;                          
let amount = 0;
let stop = 5;                        
  for (i = 1; i <= num; i++)
  {
      if (num % i === 0) { 
          divider = i;
            amount++;
            if(amount === stop){
                break;
            }
            console.log(divider + " - делит " + num + " без остатка");
      }
    }  
    console.log(amount + " - кол-во делителей");
  