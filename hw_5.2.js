let array = [343, 325, 4, 34, 325]; 
for(let i = 0; i < array.length; i++) {
    for(let j = i + 1 ; j < array.length; j++) {
      if(array[i] == array[j])
      console.log(false);
    }
}

