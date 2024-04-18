function calculateWeight(mass, gravity) {
    // Calculate weight using the formula: weight = mass x gravity
    const weight = mass * gravity;

    // Return the calculated weight
    return weight;
}

const mass = 5; // in kilograms
const gravity = 9.81; // in meters per second squared (standard gravity on Earth)
const weight = calculateWeight(mass, gravity);
console.log("Weight:", weight, "Newton"); 
