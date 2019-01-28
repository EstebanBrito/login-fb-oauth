const Sequelize = require('sequelize')
const { DBconfig } = require('../../utils/config')
const sequelize = new Sequelize(DBconfig)

const uuid = require('uuid')

const User = sequelize.define('user',{
  uuid: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
    defaultValue: uuid.v4()
  },
  local: {
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    }
  },
  facebook: {
    id: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  }
})

module.exports = User