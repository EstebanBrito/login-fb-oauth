const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

const { config } = require('./utils/config')

const app = express()

//Setting app to handle JSON parsing and use a request logger
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(logger('dev'))
//Set app to listen for specific port
app.set('port', config.PORT)

//TODO: Route configuration

module.exports = app