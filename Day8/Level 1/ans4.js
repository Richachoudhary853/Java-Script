const dog = {}

console.log(dog)

dog.name = "jacky"
dog.legs = 4
dog.color = "white"
dog.age = 3

dog.bark = function() {
    return "woof woof"
}

// Get properties from the dog object
console.log("Name:", dog.name)
console.log("Legs:", dog.legs)
console.log("Color:", dog.color)
console.log("Age:", dog.age)
console.log("Bark:", dog.bark())