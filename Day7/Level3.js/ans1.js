function userIdGeneratedByUser() {
    let numCharacters = parseInt(prompt("Enter the number of characters for each ID:"));
    let numIds = parseInt(prompt("Enter the number of IDs to generate:"));
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userIds = [];

    for (let i = 0; i < numIds; i++) {
        let userId = '';
        for (let j = 0; j < numCharacters; j++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            userId += characters[randomIndex];
        }
        userIds.push(userId);
    }

    return userIds;
}

// Example usage:
let generatedIds = userIdGeneratedByUser();
console.log("Generated User IDs:", generatedIds);
