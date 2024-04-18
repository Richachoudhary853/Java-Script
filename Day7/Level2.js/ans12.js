function sumOfEven(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) { // Check if the number is even
            sum += i;
        }
    }
    return sum;
}

let rangeEnd = 10;
let sum = sumOfEven(rangeEnd);
console.log("Sum of even numbers from 1 to", rangeEnd + ":", sum);
