function arrayOfRgbColors(numColors) {
    let rgbColors = [];
    for (let i = 0; i < numColors; i++) {
        // Generate random values for red, green, and blue components between 0 and 255
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        // Construct the RGB color string
        let rgbColor = `rgb(${red}, ${green}, ${blue})`;
        
        // Push the RGB color string into the array
        rgbColors.push(rgbColor);
    }
    return rgbColors;
}

// Example usage:
let numColors = 5;
let colorsArray = arrayOfRgbColors(numColors);
console.log("Generated RGB Colors:", colorsArray);
