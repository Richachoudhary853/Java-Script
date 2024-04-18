function modifyArray(arr) 
{
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }

    // Check if array length is less than five
    if (arr.length < 5) {
        return "Item not found";
    }

    // Modify the fifth item (index 4) of the array
    arr[4] = "modified";

    // Return the modified array
    return arr;
}

const array1 = [1, 2, 3, 4, 5, 6]
console.log(modifyArray(array1))

const array2 = [1, 2, 3, 4]
console.log(modifyArray(array2))
