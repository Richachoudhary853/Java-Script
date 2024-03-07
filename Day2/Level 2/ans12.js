const sentence = "You cannot end a sentence with because because because is a conjunction.";
const startIndex = sentence.indexOf("because because because");
const phrase = sentence.substr(startIndex, 23);

console.log(phrase);