const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Iceland", "Japan", "Kenya"];

const countriesEndsWithIA = countries.filter(country => country.toLowerCase().endsWith('ia'));

if (countriesEndsWithIA.length > 0) {
    console.log(countriesEndsWithIA);
} else {
    console.log("These are countries ends without ia");
}
