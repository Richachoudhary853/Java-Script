function areAllUnique(arr) {
    // Create an empty object to store unique items encountered
    const uniqueItems = {};

    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If the item is already in the object, it's not unique
        if (uniqueItems[arr[i]]) {
            return false;
        }
        // Otherwise, mark the item as encountered
        uniqueItems[arr[i]] = true;
    }

    return true;
}

const array1 = [1, 2, 3, 4, 5]
console.log(areAllUnique(array1))

const array2 = [1, 2, 3, 4, 1]
console.log(areAllUnique(array2))
