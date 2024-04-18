function findMax(a, b, c) 
{
    let max = a
    if (b > max) 
    {
        max = b
    }

    if (c > max) 
    {
        max = c
    }

    return max
}

const num1 = 10
const num2 = 25
const num3 = 15
const maxNum = findMax(num1, num2, num3)
console.log("The maximum number is: " + maxNum)
