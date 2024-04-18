const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js", "MongoDB"];

const longestWord = webTechs.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, '');

console.log(longestWord);
