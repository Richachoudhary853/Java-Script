const countries = [
    {
      name: 'Finland',
      capital: 'Helsinki',
      population: 5540720,
      languages: ['Finnish', 'Swedish']
    },
    {
      name: 'Estonia',
      capital: 'Tallinn',
      population: 1328360,
      languages: ['Estonian']
    },
    {
      name: 'Sweden',
      capital: 'Stockholm',
      population: 10327589,
      languages: ['Swedish']
    },
    {
      name: 'Denmark',
      capital: 'Copenhagen',
      population: 5814461,
      languages: ['Danish']
    },
    {
      name: 'Norway',
      capital: 'Oslo',
      population: 5379475,
      languages: ['Norwegian']
    }
  ];
  
  for (const { name, capital, population, languages } of countries) {
    console.log(`Country: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages.join(', ')}`);
    console.log('---');
  }
  