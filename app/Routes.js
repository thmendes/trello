'use strict'

var express = require('express')

var trelloSpyRoutes = express.Router()

var trello = require('./trello')

trelloSpyRoutes.route('/ping').get(function (req, res, next){
    res.json('pong')
})

module.exports = trelloSpyRoutes