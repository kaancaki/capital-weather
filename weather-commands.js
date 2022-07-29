const weatherBring = require('./weather-operations.js')
const yargs = require('yargs');

run();

function run(){
    yargs.command({
        command: 'weather',
        describe: "Returns the weather of the capital city of the sending country",
        builder: {
            
            country: {
                describe: "Country to be capitalized",
                demandOption: true,
                type: 'string'
            },
            unit: {
                describe: "Temperature unit | Fahrenheit use units=imperial, Celsius use units=metric, Kelvin is used by default ",
                demandOption: false,
                type: 'string'
            }
        },
        handler(argv){
            weatherBring(argv.country, argv.unit);        
        }
    });

    yargs.parse();
}

module.exports = run;
