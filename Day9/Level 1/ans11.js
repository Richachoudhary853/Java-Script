const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesContainingLand = countries.filter(country => country.toLowerCase().includes('land'));

console.log(countriesContainingLand);
