const axios = require('axios');

function getCapitalWeather(sentCountry, units = "default") {
    axios.get('https://restcountries.com/v2/name/' + sentCountry).then((res) => {
                const [{capital, population, topLevelDomain:domain, region}] = res.data;
                console.log(`${sentCountry} Information => Capital(${capital}), Population(${population}), Domain(${domain}), Region(${region})`);
    
                axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + capital + '&units=' + units + '&appid=a7f6035d3b1e0fbdd6684789f78bbf5a').then((res) => {
                    const {weather:[{description:desc}], main:{temp_min:lowtemp, temp_max:hightemp}} = res.data;
                    console.log(`Capital: ${capital}, Temperature Unit: ${units}, Lowest Temp: ${lowtemp}, High Temp: ${hightemp}, Desc: ${desc}`);
                });
            });
}



module.exports = getCapitalWeather;


