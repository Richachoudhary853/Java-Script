let string = 'You cannot end a sentence with because because because is a conjunction'
let count2 = (string.match(/because/gi) || []).length;
console.log(count2);