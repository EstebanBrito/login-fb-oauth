module.exports = {
  config: {
    PORT: process.env.PORT || 3000,
    SECRET: process.env.SECRET || 'SECRET'
  },
  DBconfig: {
    database: 'login-fb-oauth',
    username: 'postgres',
    password: 'postgres',
    hostname: '127.0.0.1',
    dialect: 'postgres',
    operatorAliases: false,
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    }
  }
}