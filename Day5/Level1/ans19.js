const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
const middleIndex = Math.floor(itCompanies.length / 2)

if (itCompanies.length % 2 === 0) {
    itCompanies.splice(middleIndex - 1, 2)
} else {
    itCompanies.splice(middleIndex, 1)
}
console.log(itCompanies)
