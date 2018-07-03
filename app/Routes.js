'use strict'

var express = require('express')

var trelloSpyRoutes = express.Router()

var Trello = require('./trello')

var config = require('./Config')

var trello = new Trello(config.KEY, config.TOKEN)

trelloSpyRoutes.route('/ping').get(function (req, res, next){
    res.json('pong')
})

trelloSpyRoutes.route('/boards').get(function (req, res, next){
    trello.getBoards('me', function(error, boards){
        if(error){
            console.log('Could not get boards')
        }
        else{
            console.log('Boards rescued')
            res.json(JSON.parse(JSON.stringify(boards)))
        }
    })
})

module.exports = trelloSpyRoutes