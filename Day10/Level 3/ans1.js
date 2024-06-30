const countries = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish'] },
    { name: 'Norway', languages: ['Norwegian'] },
    // more countries...
  ];
  
  function countLanguages(countries) {
    const allLanguages = countries.reduce((acc, country) => {
      acc.push(...country.languages);
      return acc;
    }, []);
  
    const uniqueLanguages = new Set(allLanguages);
    return uniqueLanguages.size;
  }
  
  const totalLanguages = countLanguages(countries);
  console.log('Total number of languages:', totalLanguages);
  