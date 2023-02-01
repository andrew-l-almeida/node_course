const {DataTypes} = require('sequelize')
const sequelize = require('../util/database')

const User = sequelize.define('user', {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User