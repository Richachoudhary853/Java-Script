const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Iceland", "Japan", "Kenya"];

const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log("All these countries are without land");
}
