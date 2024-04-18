function average(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }

    let sum = 0;
    let count = 0;
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is a number
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            return "Array contains non-numeric values.";
        }
        // Add the number to the sum
        sum += arr[i];
        // Increment the count
        count++;
    }
    // Calculate the average
    const avg = sum / count;
    // Return the average
    return avg;
}

const array1 = [1, 2, 3, 4, 5]
console.log(average(array1))

const array2 = [1, 2, 'three', 4, 5]
console.log(average(array2))
