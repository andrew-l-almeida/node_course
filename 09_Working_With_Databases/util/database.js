const sql = require('mssql')

const sqlConfig = {
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    server: process.env.server,
    options: {
        encrypt: false,
        trustServerCertificate: true

    }
}

const poolPromisse = new sql.ConnectionPool(sqlConfig).connect().then(pool => {
    console.log('Connected to MSSQL')
    return pool
}).catch(err => {
    console.log('Error', err)
})

module.exports = {
    sql, poolPromisse
}




