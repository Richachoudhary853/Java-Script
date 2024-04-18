function factorial(number) {
    // Base case: factorial of 0 is 1
    if (number === 0) {
        return 1;
    }
    
    // Recursive case: multiply the number by the factorial of (number - 1)
    return number * factorial(number - 1);
}

// Example usage:
let num = 5;
console.log("Factorial of", num + ":", factorial(num));
