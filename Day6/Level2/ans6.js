const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Iceland", "Japan", "Kenya"];

const countriesInfo = countries.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]);

console.log(countriesInfo);
