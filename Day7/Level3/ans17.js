function areAllSameType(arr) 
{
    // Check if the array has at least one element
    if (arr.length === 0) {
        return true; // An empty array is considered to have the same data type
    }

    // Get the data type of the first item
    const firstType = typeof arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If the data type of the current item is different from the first item, return false
        if (typeof arr[i] !== firstType) {
            return false;
        }
    }

    return true;
}

const array1 = [1, 2, 3, 4, 5]
console.log(areAllSameType(array1))

const array2 = [1, '2', 3, 4, 5]
console.log(areAllSameType(array2))
