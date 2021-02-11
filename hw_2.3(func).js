function Dividers(num, divider, result = []) {
    divider--;
    if(num % divider === 0)
    result.push(num / divider);
    if(divider === 0)
    return result;
    return Dividers(num, divider, result);
}
console.log(Dividers(12, 40));
