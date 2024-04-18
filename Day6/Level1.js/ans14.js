function generateUniqueRandomNumbers(count) 
{
    const randomNumbers = [];
    while (randomNumbers.length < count) {
        const randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}

const arrayOfUniqueRandomNumbers = generateUniqueRandomNumbers(5);
console.log(arrayOfUniqueRandomNumbers);
