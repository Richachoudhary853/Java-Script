function randomHexaNumberGenerator() 
{
    let randomNumber = Math.floor(Math.random() * 16777215); // 16777215 is FFFFFF in hexadecimal
    let hexNumber = randomNumber.toString(16).toUpperCase(); // Convert decimal to hexadecimal
    while (hexNumber.length < 6) {
        hexNumber = '0' + hexNumber;
    }
    return hexNumber;
}

let randomHex = randomHexaNumberGenerator();
console.log("Random Hexadecimal Number:", randomHex);
