function solveQuadEquation(a, b, c) 
{
    let discriminant = b * b - 4 * a * c
    let solutions = []

    if (discriminant > 0) 
    {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        solutions.push(root1, root2)
    } else if (discriminant === 0) 
    {
        let root = -b / (2 * a)
        solutions.push(root)
    }

    return solutions
}

let solutions = solveQuadEquation(1, -3, 2)
console.log(solutions)
