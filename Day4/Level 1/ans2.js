let myAge = 30
let yourAge = prompt("Enter your age:")

yourAge = parseInt(yourAge)

if (myAge > yourAge) {
    console.log("I am older than you")
} else if (myAge < yourAge) {
    console.log("You are older than me")
} else {
    console.log("We are the same age")
}
