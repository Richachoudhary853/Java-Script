const numbers = [2, 4, 6, 8];

const isEven = (number) => number % 2 === 0;

console.log(numbers.every(isEven));

console.log(numbers.some(isEven)); 

