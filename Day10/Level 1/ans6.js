const countries = ['Finland', 'Sweden', 'Norway'];

const countryLengthMap = countries.map(country => ({
  country: country,
  length: country.length
}));

console.log(countryLengthMap);
