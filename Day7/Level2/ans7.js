function capitalizeArray(arr) 
{
    let capitalizedArray = [];
    for (let i = 0; i < arr.length; i++) 
    {
        let word = arr[i];
        // Capitalize the first letter of the word
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedArray.push(capitalizedWord);
    }
    return capitalizedArray;
}

let inputArray = ["apple", "banana", "orange"];
let capitalizedResult = capitalizeArray(inputArray);
console.log("Original Array:", inputArray);
console.log("Capitalized Array:", capitalizedResult);
