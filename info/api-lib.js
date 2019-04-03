const request = require('request')

const weather = (lat, long, callback)=>{
    const url = 'https://api.darksky.net/forecast/08d457ee37d5910a6903c6e1235df388/'+lat+','+long   
    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('The request cannot be made at this time', undefined)
        }else if(response.body.code == 400){
            callback(response.body.error, undefined)
        }else{
            callback(undefined, response.body.currently)
        }
    })
}

const geocode = (address, callback)=>{
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYm5haWsyNjExIiwiYSI6ImNqdDNsOTFpNDB2aW40OXBnamtlYnRzOGUifQ.wu8BxADFpu4VHpGsSJIAgg'
    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('The request cannot be made at this time', undefined)
        }else if(response.body.features.length == 0){
            callback('No results for this query!')
        }else{
            callback(undefined, response.body.features)
        }
    })
}


module.exports = {
    weather:weather,
    geocode:geocode
}