function arrayOfHexaColors(numColors) 
{
    let hexColors = [];
    for (let i = 0; i < numColors; i++) {
        // Generate a random hexadecimal color code
        let hexColor = '#';
        for (let j = 0; j < 6; j++) {
            hexColor += Math.floor(Math.random() * 16).toString(16); // Random hexadecimal digit
        }
        hexColors.push(hexColor);
    }
    return hexColors;
}

let numColors = 5;
let colorsArray = arrayOfHexaColors(numColors);
console.log("Generated Hexadecimal Colors:", colorsArray);
