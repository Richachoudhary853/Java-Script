function sum(...args) 
{
    return args.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50
console.log(sum(2, 4, 6, 8, 10)); // Output: 30
