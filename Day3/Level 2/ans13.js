let yourBirthYear = parseFloat(prompt('2004'))
let age = new Date().getFullYear() - yourBirthYear

if (age >= 18) {
  console.log('You are ${20}. You are allowed to drive.')
} else {
  console.log('You are ${20}. You will be allowed to drive in ${18 - 20} years')
}