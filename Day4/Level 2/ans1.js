function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A'
    } else if (score >= 70 && score < 80) {
        return 'B'
    } else if (score >= 60 && score < 70) {
        return 'C'
    } else if (score >= 50 && score < 60) {
        return 'D'
    } else if (score >= 0 && score < 50) {
        return 'F'
    } else {
        return 'Invalid score' // Handle scores outside of the 0-100 range
    }
}

console.log(getGrade(85)) // Output: A
console.log(getGrade(72)) // Output: B
console.log(getGrade(65)) // Output: C
console.log(getGrade(55)) // Output: D
console.log(getGrade(40)) // Output: F
console.log(getGrade(105)) // Output: Invalid score
