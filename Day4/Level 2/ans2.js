function getSeason(month) {
    month = month.toLowerCase()
    if (month === 'september' || month === 'october' || month === 'november') {
        return 'Autumn'
    } else if (month === 'december' || month === 'january' || month === 'february') {
        return 'Winter'
    } else if (month === 'march' || month === 'april' || month === 'may') {
        return 'Spring'
    } else if (month === 'june' || month === 'july' || month === 'august') {
        return 'Summer'
    } else {
        return 'Invalid month'
    }
}

// Example usage:
console.log(getSeason('October')) // Output: Autumn
console.log(getSeason('January')) // Output: Winter
console.log(getSeason('April'))  // Output: Spring
console.log(getSeason('July'))  // Output: Summer
console.log(getSeason('Invalid')) // Output: Invalid month
