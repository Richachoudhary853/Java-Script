function sumOfArrayItems(arr) 
{
    // Check if all array items are numbers
    for (let item of arr) {
        if (typeof item !== 'number') {
            return "Error: Array contains non-number items.";
        }
    }

    // Calculate the sum of all array items
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

let array1 = [1, 2, 3, 4, 5];
console.log("Sum of array items:", sumOfArrayItems(array1)); // Output: 15

let array2 = [1, 2, '3', 4, 5];
console.log("Sum of array items:", sumOfArrayItems(array2)); // Output: Error: Array contains non-number items.
