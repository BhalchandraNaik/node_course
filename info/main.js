const yargs = require('yargs')
const apis = require('./api-lib')

yargs.command({
    command:'weather',
    describe:'Show me the weather',
    builder:{
        lat:{
            describe:'The latitude of the location',
            demandOption:true,
            type:'number'
        },
        long:{
            describe:'The longitude of the location',
            demandOption:true,
            type:'number'
        }
    },
    handler:function(argv){
        return apis.weather(argv.lat, argv.long, (error, data)=>{
            console.log('Error:', error)
            console.log('Data : ', data)
        })
    }
})

yargs.command({
    command:'geocode',
    describe:'Location information',
    builder:{
        address:{
            describe:'location query',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        return apis.geocode(argv.address, (error, data)=>{
            console.log('Error:', error)
            data.forEach(element => {
                console.log(element.place_name)
            });
        })
    }
})

yargs.parse()