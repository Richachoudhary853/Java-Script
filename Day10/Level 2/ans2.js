const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const intersection = a.filter(value => b.includes(value));

console.log('Intersection:', intersection);
