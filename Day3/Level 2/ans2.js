/* let sideA = ("Enter side a")
let sideC = ("Enter side b")
let sideB = ("Enter side c")

let perimeter = sideA + sideB + sideC

console.log("The perimeter of the triangle is " + perimeter) */

let sideA = prompt('Enter side A: 5 ');
let sideB = prompt('Enter side B: 4 ');
let sideC = prompt('Enter side C: 3 ');

let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);

console.log(perimeter);        