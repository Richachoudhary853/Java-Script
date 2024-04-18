function addItem(item, array) 
{
    return [...array, item];
}

let originalArray = [1, 2, 3, 4]
let newItem = 5
let newArray = addItem(newItem, originalArray)
console.log("Original Array:", originalArray)
console.log("New Array after adding", newItem + ":", newArray)
