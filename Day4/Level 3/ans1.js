function getDaysInMonth(month) {
    month = month.toLowerCase();
    switch (month) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            return `${month} has 31 days.`;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            return `${month} has 30 days.`;
        case 'february':
            return `${month} has 28 days.`;
        default:
            return 'Invalid month';
    }
}

// Example usage:
console.log(getDaysInMonth('January'));   // Output: January has 31 days.
console.log(getDaysInMonth('JANUARY'));   // Output: January has 31 days.
console.log(getDaysInMonth('February'));  // Output: February has 28 days.
console.log(getDaysInMonth('FEbruary'));  // Output: February has 28 days.
