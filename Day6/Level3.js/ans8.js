const countries = ["United States", "United Kingdom", "New Zealand", "South Africa", "Saudi Arabia", "Costa Rica", "Sierra Leone", "Czech Republic", "Dominican Republic", "United Arab Emirates"];

// Filter countries containing two or more words
const countriesWithMultipleWords = countries.filter(country => country.includes(' '));

console.log(countriesWithMultipleWords);
