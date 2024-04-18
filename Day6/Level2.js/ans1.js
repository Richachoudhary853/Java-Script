function generateRandomId(length) 
{
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }
    return randomId;
}

const randomId1 = generateRandomId(11);
console.log(randomId1);

const randomId2 = generateRandomId(26);
console.log(randomId2);
