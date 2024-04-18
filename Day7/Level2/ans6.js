function reverseArray(arr) 
{
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) 
    {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray)
console.log("Original Array:", originalArray)
console.log("Reversed Array:", reversedArray)
