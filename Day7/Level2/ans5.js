function swapValues(x, y) 
{
    // Using destructuring assignment to swap values
    [x, y] = [y, x];
    // No need to return anything since the values are swapped in-place
}

let a = 8;
let b = 6;
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

swapValues(a, b);

console.log("After swapping:");
console.log("a =", a); 
console.log("b =", b); 
