const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const day = now.getDay()
const hours = now.getHours()
const minutes = now.getMinutes()
const secondsElapsed = now.getTime() 

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())

// "Seconds elapsed from January 1, 1970 to now:", secondsElapsed
console.log(now.getTime())
