const a = [4, 5, 8, 9];
const countries = ['Finland', 'Sweden', 'Norway'];

// Concatenate arrays and use Set to get unique values
const union = [...new Set([...a, ...countries])];

console.log(union); // Output: [4, 5, 8, 9, 'Finland', 'Sweden', 'Norway']
