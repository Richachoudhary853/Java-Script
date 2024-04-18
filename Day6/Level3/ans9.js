const countries = ["united states", "united kingdom", "new zealand", "south africa", "saudi arabia", "costa rica", "sierra leone", "czech republic", "dominican republic", "united arab emirates"]

// Reverse the countries array and capitalize each country
const reversedAndCapitalizedCountries = countries.reverse().map(country => country.toUpperCase())

console.log(reversedAndCapitalizedCountries)
