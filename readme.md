# Capital Weather Info

Returns the current weather information of the capital of the country sent through the console.

## Packages Used

In this plugin, yargs and axios npm packages, OpenWeatherMap and REST Countries API are used.

-[Yargs](https://www.npmjs.com/package/yargs)

-[Axios](https://www.npmjs.com/package/axios)

-[OpenWeatherMap](https://openweathermap.org/)

-[REST Countries](https://restcountries.com/)

## Install

To install this package, simply write this code on the console screen:

```
npm i country-weather-info
```

## Usage

For more information: weather --help

```
const app = require('country-weather-info');
app();
```

**Console:** 

```
node yourjsfile.js weather --country="Country Name" --unit="Heat Unit [Optional, default value fahrenheit]"
```



## Screenshot

![](https://i.imgur.com/de8oVnM.png)