const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesStartingWithE = countries.filter(country => country.startsWith('E'));

console.log(countriesStartingWithE); // Output: ['Denmark', 'IceLand']
