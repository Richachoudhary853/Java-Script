function calculateBMI(weight, height) {
    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
    const bmi = weight / (height * height);

    // Determine the weight group based on BMI
    let weightGroup;
    if (bmi < 18.5) {
        weightGroup = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        weightGroup = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        weightGroup = "Overweight";
    } else {
        weightGroup = "Obese";
    }

    // Return BMI and weight group
    return {
        bmi: bmi,
        weightGroup: weightGroup
    };
}

const weight = 70; // in kilograms
const height = 1.75; // in meters
const result = calculateBMI(weight, height);
console.log("BMI:", result.bmi);
console.log("Weight Group:", result.weightGroup);
