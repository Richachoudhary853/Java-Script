const dog = {}
console.log(dog)

dog.name = "jacky"
dog.legs = 4
dog.color = "white"
dog.age = 3

dog.bark = function() {
    return "woof woof";
}

dog.breed = "Golden Retriever"
dog.getDogInfo = function() {}

console.log(dog)
console.log(dog.getDogInfo())
