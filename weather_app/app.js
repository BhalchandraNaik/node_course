const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const process = require('process')

// geocode('Boulder', (error, data)=>{
//     console.log('Error', error);
//     console.log('Data', data);
// })

forecast(process.argv[2], process.argv[3], (error, {summary, temperature})=>{
    console.log('Error:', error)
    console.log('summary :', summary)
    console.log('temperature:', temperature)
})
