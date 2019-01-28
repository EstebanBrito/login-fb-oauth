const app = require('../app.js')
const http = require('http')

//Server setup
const server = http.createServer(app)
server.on('listening', () => {console.log('Server listening')})
const { config } = require('../utils/config')

//DB Setup
const Sequelize = require('sequelize')
const { DBconfig } = require('../utils/config')
const sequelize = new Sequelize(DBconfig)

//TODO: Change to Async Await
sequelize.authenticate()
    .then(() => {
        sequelize.sync({force: false, logging: true})
        console.log("DB connection established")
        server.listen(config.PORT)
        //server.on('identifier', handler)
    })
    .catch(() => console.log("Something went wrong"))