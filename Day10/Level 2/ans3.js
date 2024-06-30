const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const commonElements = a.filter(item => b.includes(item));

console.log('Common elements between a and b:', commonElements);
