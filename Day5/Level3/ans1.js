const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sorting the array
ages.sort((a, b) => a - b);

// Finding min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Finding median age
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}

// Finding average age
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;

// Finding range of ages
const ageRange = maxAge - minAge;

// Comparing (min - average) and (max - average) using abs() method
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", ageRange);
console.log("Difference between Min and Average:", minAverageDiff);
console.log("Difference between Max and Average:", maxAverageDiff);
