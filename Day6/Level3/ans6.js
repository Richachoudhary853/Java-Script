const countries = ["Albania", "Bolivia", "Finland", "Ireland", "Iceland", "Japan", "Kenya"];

// Filter countries containing the word 'land'
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

console.log(countriesWithLand);
