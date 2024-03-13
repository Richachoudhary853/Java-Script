let dateInfo = new Date()
let year = dateInfo.getFullYear()
let month = dateInfo.getMonth()
let date = dateInfo.getDate()
let hours = dateInfo.getHours()
let minutes = dateInfo.getMinutes()

// Format: YYYY-MM-DD HH:mm
let formattedDate = (year + '-' + month + '-' + date + ' ' + hours + ':' + minutes)

console.log('Formatted Date:', formattedDate)
