'use strict'

var express = require('express')

var path = require('path')

var app = express()

var bodyParser = require('body-parser')

var config = require('./app/Config')

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

var port = config.APP_PORT || 4000

app.listen(port)

console.log('App listening on port ' + port)

var trelloSpyRoutes = require('./app/Routes')

app.use('/api', trelloSpyRoutes)

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port)

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    next()
})

app.get('/', function(req, res, next){
    res.sendFile('./public/index.html')
})


