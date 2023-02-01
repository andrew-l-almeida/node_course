const {DataTypes} = require('sequelize')
const sequelize = require('../util/database')

const OrdemItem = sequelize.define('orderItem', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER
    }
})

module.exports = OrdemItem