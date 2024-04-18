function rgbColorGenerator() 
{
    // Generate random values for red, green, and blue components between 0 and 255
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Construct the RGB color string
    let rgbColor = `rgb(${red}, ${green}, ${blue})`;

    return rgbColor;
}

let randomColor = rgbColorGenerator();
console.log("Generated RGB Color:", randomColor);
