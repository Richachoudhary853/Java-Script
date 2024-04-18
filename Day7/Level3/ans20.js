function reverseCountries(countries) {
    // Make a copy of the original array
    const copyOfCountries = countries.slice();

    // Reverse the copy of the array
    const reversedCountries = copyOfCountries.reverse();

    // Return the reversed array
    return reversedCountries;
}

const countries = ["USA", "Canada", "UK", "Australia"];
const reversedCountries = reverseCountries(countries);
console.log(reversedCountries);
