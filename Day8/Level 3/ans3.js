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

function rateProduct(productId, userId, rating) {
    const product = products.find(product => product._id === productId);

    if (product) {
        product.ratings.push({ userId, rate: rating });
        console.log('Product rated successfully');
    } else {
        console.log('Product not found');
    }
}

function averageRating(productId) {
    const product = products.find(product => product._id === productId);

    if (product && product.ratings.length > 0) {
        const totalRating = product.ratings.reduce((acc, curr) => acc + curr.rate, 0);
        const average = totalRating / product.ratings.length;
        return average.toFixed(2);
    } else {
        return 'No ratings available';
    }
}

// Example usage:

// Rate a product
rateProduct('aegfal', 'ab12ex', 4);

// Calculate average rating of a product
const avgRating = averageRating('aegfal');
console.log(`Average rating of the product: ${avgRating}`);
