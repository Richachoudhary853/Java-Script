let sumOfEvens = 0;
let sumOfOdds = 0;

for (let i = 0; i <= 100; i++) 
{
    if (i % 2 === 0) {
        sumOfEvens += i; // If the number is even, add it to the sum of evens
    } else {
        sumOfOdds += i; // If the number is odd, add it to the sum of odds
    }
}

const sums = [sumOfEvens, sumOfOdds];
console.log("Sum of evens and odds:", sums);
