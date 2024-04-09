const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

const middleIndex = Math.floor(itCompanies.length / 2)

if (itCompanies.length % 2 === 1) {
    itCompanies.splice(middleIndex, 1)
} else {
    itCompanies.splice(middleIndex - 1, 2)
}

console.log(itCompanies);
