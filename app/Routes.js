'use strict'

var express = require('express')

var trelloSpyRoutes = express.Router()

var Trello = require('./trello')
var List = require('./List')

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

trelloSpyRoutes.route('/board/:id/information').get(function (req, res, next){
    var id = req.params.id
    trello.getBoardInformation(id, function(error, boardInformations){
        if(error){
            console.log('Could not get board information')
        }
        else{
            console.log('Board information rescued')
            res.json(JSON.parse(JSON.stringify(boardInformations)))
        }
    })
})

trelloSpyRoutes.route('/board/:id/labels').get(function(req, res, next){
    var id = req.params.id
    trello.getLabelsForBoard(id, function(error, labels){
        if(error){
            console.log('Could not get labels')
        }
        else{
            console.log('Labels rescued')
            res.json(JSON.parse(JSON.stringify(labels)))
        }
    })
})

trelloSpyRoutes.route('/board/:id/lists').get(function(req, res, next){
    var id = req.params.id
    trello.getListsOnBoard(id, function(error, labels){
        if(error){
            console.log('Could not get lists:')
            console.log(error)
        }
        else{
            console.log('Lists rescued')
            res.json(JSON.parse(JSON.stringify(labels)))
        }
    })
})

trelloSpyRoutes.route('/list/:id/cards').get(function (req, res, next){
    var id = req.params.id
    var extraParams = {}
    extraParams.fields = 'id,name,labels'
    
    trello.getCardsOnList(id, function(error, cards){
        if(error)
            console.log('deu ruim')
        else{
            console.log('deu bom' + cards)
            teste = cards;
        }
    })

    trello.getCardsOnListWithExtraParams(id, extraParams, function(error, listInformations){
        if(error){
            console.log('Could not get list information')
        }
        else{
           console.log('List information rescued')
           var list = new List(listInformations, null)
           console.log(list.countCards())
        }
    })
})

module.exports = trelloSpyRoutes