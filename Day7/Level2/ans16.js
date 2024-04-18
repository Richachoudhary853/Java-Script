function generateRandomMacAddress() 
{
    let macAddress = ""
    for (let i = 0; i < 6; i++) {
        let hex = Math.floor(Math.random() * 256).toString(16).toUpperCase();
        macAddress += (hex.length === 1 ? '0' + hex : hex); // Ensure each part has two characters
        if (i < 5) {
            macAddress += ":"
        }
    }

    return macAddress;
}

let randomMac = generateRandomMacAddress();
console.log("Random MAC Address:", randomMac);
