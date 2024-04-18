const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Iceland", "Japan", "Kenya"];

const countryWithLongestName = countries.reduce((longestCountry, currentCountry) => {
    return currentCountry.length > longestCountry.length ? currentCountry : longestCountry;
}, '');

console.log(countryWithLongestName);
