function isWeekend(day) {
    day = day.toLowerCase()
    if (day === 'saturday' || day === 'sunday') {
        return true
    } else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
        return false
    } else {
        return 'Invalid day'
    }
}

console.log(isWeekend('Saturday')) // Output: true (Weekend)
console.log(isWeekend('saturDaY')) // Output: true (Weekend)
console.log(isWeekend('Friday'))   // Output: false (Working day)
console.log(isWeekend('FrIDAy'))  // Output: false (Working day)
console.log(isWeekend('Invalid'))  // Output: Invalid day
