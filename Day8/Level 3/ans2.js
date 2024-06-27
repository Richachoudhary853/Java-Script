const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

function signUp(username, email, password) {
    // Check if the user already exists
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        console.log('You already have an account');
    } else {
        const newUser = {
            _id: Math.random().toString(36).substr(2, 6), // Generate a random ID
            username,
            email,
            password,
            createdAt: new Date().toLocaleString(),
            isLoggedIn: false
        };
        users.push(newUser);
        console.log('User signed up successfully');
    }
}

function signIn(email, password) {
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        user.isLoggedIn = true;
        console.log('User signed in successfully');
    } else {
        console.log('Invalid email or password');
    }
}

// Example usage:

// Attempt to sign up a new user
signUp('John', 'john@john.com', '123456');

// Attempt to sign in with existing user credentials
signIn('john@john.com', '123456');

// Check the updated users array
console.log(users);
