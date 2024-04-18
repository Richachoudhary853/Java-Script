function isPrime(number) {
    // Check if the number is less than 2, which is not prime
    if (number < 2) {
        return false;
    }
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any number other than itself and 1, it's not prime
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7))
console.log(isPrime(10))
console.log(isPrime(31))
