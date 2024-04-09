function findMiddleCountry(countries) {
    const middleIndex = Math.floor(countries.length / 2);

    if (countries.length % 2 === 0) {
        // If the array has an even number of elements
        return [countries[middleIndex - 1], countries[middleIndex]];
    } else {
        // If the array has an odd number of elements
        return countries[middleIndex];
    }
}

// Example array of countries
const countries = ["USA", "Canada", "UK", "Australia", "Germany"];

// Find middle country or countries
const middle = findMiddleCountry(countries);

console.log("Middle country(s):", middle);
