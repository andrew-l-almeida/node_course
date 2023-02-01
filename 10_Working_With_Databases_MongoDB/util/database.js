const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.server,
  dialect: 'mssql',
  logging: false
})

module.exports = sequelize

// const poolPromisse = new sql.ConnectionPool(sqlConfig).connect().then(pool => {
//     console.log('Connected to MSSQL')
//     return pool
// }).catch(err => {
//     console.log('Error', err)
// })

// module.exports = {
//     sql, poolPromisse
// }




