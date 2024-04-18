function removeItem(index, array) 
{
    return array.slice(0, index).concat(array.slice(index + 1));
}

let originalArray = [1, 2, 3, 4, 5];
let indexToRemove = 2; // Remove the item at index 2 (value: 3)
let newArray = removeItem(indexToRemove, originalArray);
console.log("Original Array:", originalArray);
console.log("New Array after removing item at index", indexToRemove + ":", newArray);
