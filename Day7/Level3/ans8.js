function shuffleArray(array) {
    // Create a copy of the original array
    let shuffledArray = array.slice();
    
    // Fisher-Yates (Knuth) Shuffle Algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    
    return shuffledArray;
}

// Example usage:
let originalArray = [1, 2, 3, 4, 5];
let shuffledArray = shuffleArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Shuffled Array:", shuffledArray);
