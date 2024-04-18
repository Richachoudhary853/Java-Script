const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Iceland", "Japan", "Kenya"];

const countryWithMaxChars = countries.reduce((maxCharsCountry, currentCountry) => {
    return currentCountry.length > maxCharsCountry.length ? currentCountry : maxCharsCountry;
}, '');

console.log(countryWithMaxChars);
