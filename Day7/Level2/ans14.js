function sumOfArguments() 
{
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumOfArguments(1, 2, 3)); 
console.log(sumOfArguments(5, 10, 15, 20)); 
console.log(sumOfArguments(2, 4, 6, 8, 10));
