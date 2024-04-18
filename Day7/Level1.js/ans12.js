function convertCelsiusToFahrenheit(celsius) 
{
    if (typeof celsius !== 'number') 
    {
        return "Invalid input. Celsius must be a number."
    }

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}

const celsius = 20
const fahrenheit = convertCelsiusToFahrenheit(celsius)
console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.")
