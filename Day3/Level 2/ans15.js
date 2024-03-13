let now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1 
let date = now.getDate()
let hours = now.getHours() 
let minutes = now.getMinutes() 

// Format 1: YYYY-MM-DD HH:mm
let format1 = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes
// Format 2: DD-MM-YYYY HH:mm
let format2 = date + '-' + month + '-' + year + ' ' + hours + ':' + minutes
// Format 3: DD/MM/YYYY HH:mm
let format3 = date + '/' + month + '/' + year + ' ' + hours + ':' + minutes

// Display the results
console.log('Format 1: ', format1)
console.log('Format 2: ', format2)
console.log('Format 3: ', format3)
