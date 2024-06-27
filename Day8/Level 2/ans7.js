const countries = {
    Finland: {
        capital: 'Helsinki',
        population: 5536146,
        languages: ['Finnish', 'Swedish']
    },
    Sweden: {
        capital: 'Stockholm',
        population: 10353442,
        languages: ['Swedish']
    },
    Norway: {
        capital: 'Oslo',
        population: 5421241,
        languages: ['Norwegian']
    },
    Denmark: {
        capital: 'Copenhagen',
        population: 5822763,
        languages: ['Danish']
    },
    Iceland: {
        capital: 'Reykjavik',
        population: 366130,
        languages: ['Icelandic']
    }
};

for (const country in countries) {
    if (countries.hasOwnProperty(country)) {
        const { capital, population, languages } = countries[country];
        console.log(`Country: ${country}`);
        console.log(`Capital: ${capital}`);
        console.log(`Population: ${population}`);
        console.log(`Languages: ${languages.join(', ')}`);
        console.log('----------------------');
    }
}
