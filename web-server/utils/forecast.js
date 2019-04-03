const request = require('request')

const forecast = (lat, long, callback)=>{
    const url = 'https://api.darksky.net/forecast/08d457ee37d5910a6903c6e1235df388/'+lat+','+long
    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('Sorry the request coculd not be completed at this time', undefined);
        }else if(response.body.code == 400){
            callback(response.body.error, {temperature:undefined, summary:undefined});
        }else{
            callback(undefined, response.body.currently)
        }
    })
}

module.exports = forecast