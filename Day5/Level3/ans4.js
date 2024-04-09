function divideArray(countries) {
    const midpoint = Math.ceil(countries.length / 2);
    const firstHalf = countries.slice(0, midpoint);
    const secondHalf = countries.slice(midpoint);
    return [firstHalf, secondHalf];
}

const countries = ["USA", "Canada", "UK", "Australia", "Germany", "France", "Italy", "Japan", "Brazil", "China", "India", "Mexico"];

// Divide the array
const dividedArrays = divideArray(countries);

console.log("First half:", dividedArrays[0]);
console.log("Second half:", dividedArrays[1]);
