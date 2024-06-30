const countries = [
    { name: 'Finland', capital: 'Helsinki', population: 5527573 },
    { name: 'Sweden', capital: 'Stockholm', population: 10353442 },
    { name: 'Denmark', capital: 'Copenhagen', population: 5831404 },
    { name: 'Norway', capital: 'Oslo', population: 5379475 },
    { name: 'Iceland', capital: 'Reykjavik', population: 366425 }
  ];
  
  const sortedByName = [...countries].sort((a, b) => a.name.localeCompare(b.name));
  console.log('Sorted by name:', sortedByName);
  
  const sortedByCapital = [...countries].sort((a, b) => a.capital.localeCompare(b.capital));
  console.log('Sorted by capital:', sortedByCapital);
  
  const sortedByPopulation = [...countries].sort((a, b) => a.population - b.population);
  console.log('Sorted by population:', sortedByPopulation);
  