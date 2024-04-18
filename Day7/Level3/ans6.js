function convertRgbToHexa(rgbColor) {
    // Extract RGB components from the string
    let rgbValues = rgbColor.match(/\d+/g);
    let red = parseInt(rgbValues[0]);
    let green = parseInt(rgbValues[1]);
    let blue = parseInt(rgbValues[2]);

    // Convert RGB to hexadecimal
    let hexColor = '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase();

    return hexColor;
}

let rgbColor = 'rgb(255, 69, 0)';
let hexColor = convertRgbToHexa(rgbColor);
console.log("Converted Hexadecimal Color:", hexColor);
