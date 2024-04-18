function generateRandomNumbers(count) 
{
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

const arrayOfRandomNumbers = generateRandomNumbers(5);
console.log(arrayOfRandomNumbers);
