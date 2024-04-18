function convertHexaToRgb(hexColor) {
    // Remove '#' if it exists
    hexColor = hexColor.replace('#', '');

    // Convert hex to RGB
    let red = parseInt(hexColor.substring(0, 2), 16);
    let green = parseInt(hexColor.substring(2, 4), 16);
    let blue = parseInt(hexColor.substring(4, 6), 16);

    // Construct the RGB color string
    let rgbColor = `rgb(${red}, ${green}, ${blue})`;

    return rgbColor;
}

// Example usage:
let hexColor = '#ff4500';
let rgbColor = convertHexaToRgb(hexColor);
console.log("Converted RGB Color:", rgbColor);
