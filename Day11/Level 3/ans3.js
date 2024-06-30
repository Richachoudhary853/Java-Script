const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];
  
  function convertArrayToObject(arr) {
    return arr.map(([name, skills, scores]) => ({
      name,
      skills,
      scores
    }));
  }
  
  console.log(convertArrayToObject(students));
  