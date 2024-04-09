let age = prompt("Enter your age:")
age = parseInt(age)

if (age >= 18) {
    console.log("You are old enough to drive")
} 
else {
    let yearsToWait = 18 - age
    console.log("Sorry, you are not old enough to drive. Please wait for " + yearsToWait + " more year(s) to turn 18.")
}
