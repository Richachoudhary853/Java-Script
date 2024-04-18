const countries = ["Albania", "Bolivia", "Canada", "Chad", "Cuba", "Egypt", "Fiji", "Ghana", "India", "Iran", "Iraq", "Italy", "Japan", "Kenya", "Laos", "Mali", "Niger", "Oman", "Peru", "Qatar", "Rwanda", "Spain", "Sudan", "Togo", "Yemen", "Zaire"];

// Filter countries with exactly four characters
const countriesWithFourChars = countries.filter(country => country.length === 4);

console.log(countriesWithFourChars);
