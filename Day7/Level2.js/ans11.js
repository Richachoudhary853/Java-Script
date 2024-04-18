function sumOfOdds(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) { // Check if the number is odd
            sum += i;
        }
    }
    return sum;
}

let rangeEnd = 10;
let sum = sumOfOdds(rangeEnd);
console.log("Sum of odd numbers from 1 to", rangeEnd + ":", sum);
