function checkSeason(month) 
{    
    if (typeof month !== 'number' || month < 1 || month > 12 || !Number.isInteger(month)) 
    {
        return "Invalid input. Month must be a valid integer between 1 and 12."
    }

    const seasons = {
        'Autumn': [9, 10, 11],
        'Winter': [12, 1, 2],
        'Spring': [3, 4, 5],
        'Summer': [6, 7, 8]
    }

    for (const season in seasons) 
    {
        if (seasons[season].includes(month)) 
        {
            return season
        }
    }

    return "Unknown season"
}

const month = 7
const season = checkSeason(month)
console.log("The season for month " + month + " is " + season + ".")



