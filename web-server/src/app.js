const path  = require('path')
const express = require('express')
const forecast = require('../utils/forecast.js')
const hbs = require('hbs')
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


// Setup handlebars engine and views  location
app.set('view engine','hbs')
app.set('views', viewPath);
hbs.registerPartials(partialsPath)

// Routes sofr the different pages
app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=>{
    res.render('index', {
     title:'Weather',
     name:'Bhalchandra Naik'
    })
})

app.get('/products', (req, res)=>{
    if(!req.query.search){
        res.send({
            error:'You must provide a search term'
        })
    }
    
    console.log(req.query)
    res.send({
        products:[]
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.lat){
        res.send({
            error:'You must supply a latitude'
        })
    }
    if(!req.query.long){
        res.send({
            error:'You must supply a longitude'
        })
    }

    forecast(req.query.lat, req.query.long, (error, data)=>{
        if(error){
            res.send(error)
        }else{
            data.title = 'Weather'
            res.send(data)
        }
    })
})

app.get('*',(req, res)=>{
    res.send('My 404 page')
})


app.listen(3000, ()=>{
    console.log('Server is up  @ ::3000')
})