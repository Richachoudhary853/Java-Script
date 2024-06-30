const countries = ['Finland', 'Sweden', 'Norway'];

// Remove an element from array 'countries'
const countryToRemove = 'Sweden';
const filteredCountries = countries.filter(country => country !== countryToRemove);
console.log('Countries after removal:', filteredCountries);
