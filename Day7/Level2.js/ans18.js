function userIdGenerator() 
{
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId = '';
    for (let i = 0; i < 7; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        userId += characters[randomIndex];
    }
    return userId;
}

let userId = userIdGenerator();
console.log("Generated User ID:", userId);
