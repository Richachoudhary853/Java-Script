function generateRandomHexColor() 
{
    const characters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        color += characters.charAt(randomIndex);
    }
    return color;
}

const randomHexColor = generateRandomHexColor();
console.log(randomHexColor);
