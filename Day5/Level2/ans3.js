const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' in the beginning if not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic
const allergicToHoney = true; // Change to true if allergic, false otherwise
if (allergicToHoney) {
    const index = shoppingCart.indexOf('Honey');
    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
