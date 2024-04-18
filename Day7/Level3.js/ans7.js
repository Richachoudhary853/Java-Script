function generateColors(numColors, format) {
    let colors = [];
    for (let i = 0; i < numColors; i++) {
        if (format === 'hexa') {
            // Generate a random hexadecimal color
            let hexColor = '#';
            for (let j = 0; j < 6; j++) {
                hexColor += Math.floor(Math.random() * 16).toString(16); // Random hexadecimal digit
            }
            colors.push(hexColor.toUpperCase());
        } else if (format === 'rgb') {
            // Generate random values for red, green, and blue components between 0 and 255
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let rgbColor = `rgb(${red}, ${green}, ${blue})`;
            colors.push(rgbColor);
        } else {
            console.error("Invalid format. Please specify 'hexa' or 'rgb'.");
            return;
        }
    }
    return colors;
}

let numColors = 5;
let hexColors = generateColors(numColors, 'hexa');
console.log("Generated Hexadecimal Colors:", hexColors);

let rgbColors = generateColors(numColors, 'rgb');
console.log("Generated RGB Colors:", rgbColors);
