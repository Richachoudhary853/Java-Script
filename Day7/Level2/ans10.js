function sumOfNumbers(number) 
{
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

let rangeEnd = 5;
let sum = sumOfNumbers(rangeEnd);
console.log("Sum of numbers from 1 to", rangeEnd + ":", sum);
