let a = 1
let b = 6
let c = 9

let operator = b * b - 4 * a * c

if (operator >= 0) {

let x1 = (-b + Math.sqrt(operator)) / (2 * a)
    let x2 = (-b - Math.sqrt(operator)) / (2 * a)
    
    console.log('The solutions for x when y = 0 are:', x1, 'and', x2)
} else {
    console.log('No real solutions exist for x when y = 0.')
}
