function generateRandomUserIp() {
    // Generate each part of the IP address randomly
    let part1 = Math.floor(Math.random() * 256);
    let part2 = Math.floor(Math.random() * 256);
    let part3 = Math.floor(Math.random() * 256);
    let part4 = Math.floor(Math.random() * 256);

    // Combine the parts to form the IP address
    let ipAddress = `${part1}.${part2}.${part3}.${part4}`;

    return ipAddress;
}

let randomIp = generateRandomUserIp();
console.log("Random User IP:", randomIp);
