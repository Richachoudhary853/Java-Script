function evensAndOdds(number) 
{
    let evenCount = 0;
    let oddCount = 0;
    
    // Convert the number to a string to iterate through each digit
    let numStr = number.toString();
    
    for (let digit of numStr) {
        let digitValue = parseInt(digit);
        if (digitValue % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    return { evenCount, oddCount };
}

let num = 123456789;
let counts = evensAndOdds(num);
console.log("Number:", num);
console.log("Number of even digits:", counts.evenCount);
console.log("Number of odd digits:", counts.oddCount);
