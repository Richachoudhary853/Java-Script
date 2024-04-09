let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let filteredCompanies = [];

for (let i = 0; i < itCompanies.length; i++) {
    let companyName = itCompanies[i];
    let oCount = 0;

    for (let j = 0; j < companyName.length; j++) {
        if (companyName[j].toLowerCase() === 'o') {
            oCount++;
        }
    }

    if (oCount > 1) {
        filteredCompanies.push(companyName);
    }
}

console.log("Companies with more than one 'o':", filteredCompanies);
