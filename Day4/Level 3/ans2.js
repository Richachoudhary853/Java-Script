function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

function getDaysInMonth(month, year) {
    month = month.toLowerCase()
    switch (month) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            return `${month} has 31 days.`
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            return `${month} has 30 days.`
        case 'february':
            if (isLeapYear(year)) {
                return `${month} has 29 days in a leap year.`
            } else {
                return `${month} has 28 days.`
            }
        default:
            return 'Invalid month'
    }
}

console.log(getDaysInMonth('January', 2024))  // Output: January has 31 days.
console.log(getDaysInMonth('February', 2021))  // Output: February has 28 days.
console.log(getDaysInMonth('February', 2024))  // Output: February has 29 days in a leap year.
