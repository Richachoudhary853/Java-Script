const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text.match(/\d+/g);
let totalIncome = 0;
if (numbers) {
    numbers.forEach(number => {
        totalIncome += parseInt(number);
    });
}
totalIncome += parseInt(numbers[0]) * 12;
totalIncome += parseInt(numbers[2]) * 12;
console.log("Total annual income:", totalIncome, "euro");