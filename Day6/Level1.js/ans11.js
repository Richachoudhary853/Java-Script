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

console.log("The sum of all evens from 0 to 100 is:", sumOfEvens);
console.log("The sum of all odds from 0 to 100 is:", sumOfOdds);
