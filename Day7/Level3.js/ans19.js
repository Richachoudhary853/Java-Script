function generateRandomNumbers() {
    const numbers = new Set(); // Use a Set to store unique numbers

    // Generate random numbers until we have seven unique ones
    while (numbers.size < 7) {
        const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
        numbers.add(randomNumber); // Add the number to the set (it will automatically remove duplicates)
    }

    // Convert the set to an array and return it
    return Array.from(numbers);
}

const randomNumbers = generateRandomNumbers()
console.log(randomNumbers)
