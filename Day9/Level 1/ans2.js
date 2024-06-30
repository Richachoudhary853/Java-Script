const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// forEach
const logElement = (element) => {
  console.log(element);
};

countries.forEach(logElement);
names.forEach(logElement);
numbers.forEach(logElement);
products.forEach((product) => logElement(product.product + ': ' + product.price));

// map
const toUpperCase = (str) => str.toUpperCase();
const upperCaseCountries = countries.map(toUpperCase);
console.log(upperCaseCountries);

// filter
const greaterThanFive = (num) => num > 5;
const filteredNumbers = numbers.filter(greaterThanFive);
console.log(filteredNumbers);

// reduce
const sum = (acc, curr) => acc + curr;
const totalSum = numbers.reduce(sum, 0);
console.log(totalSum);
