const sentence = 'I am a teacher, and I love teaching.There is nothing as more rewarding as educating and empoweringpeople.I found teaching more interesting than any other jobs. Does this motivate you to be a teacher This 30DaysOfJavaScript is also the result of love of teaching.'

let symbolPattern = /\W/gi;
replacement = sentence.replace(/ /gi, 'SYMBOL');
replacement = replacement.replace(symbolPattern, '');
replacement = replacement.replace(/SYMBOL/gi, ' ');
console.log("task3. regex X replace: \n", replacement);
let words   = replacement.split(' ');
let frequency = {};
let maxFrequency = 0;
let mostFrequentWord = '';
console.log(words);
for (let i=0; i < words.length; i++){

    let word = words[i];
    if (frequency[word]){
        frequency[word] += 1; 
    } else {
        frequency[word] = 1;
    }
    if (frequency[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency     = frequency[word];
    }

}
console.log(frequency)
console.log(maxFrequency,mostFrequentWord );