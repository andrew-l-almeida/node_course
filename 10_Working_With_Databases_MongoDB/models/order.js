const {DataTypes} = require('sequelize')
const sequelize = require('../util/database')

const Order = sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: true
    }
})
module.exports = Order
