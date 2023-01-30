const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../util/database')

const Product = sequelize.define('product', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Product





// const Cart = require('./cart')
// const {poolPromisse} = require('../util/database')

// module.exports = class Product {
//     constructor(id, title, imageUrl, description, price){
//         this.id = id
//         this.title = title
//         this.imageUrl = imageUrl
//         this.description = description
//         this.price = price
//     }

//     async save(){
//         const pool = await poolPromisse
//         return await pool.query(`insert into products (id, title, price, description, imageUrl) values ((select max(id) from products) + 1, '${this.title}', ${this.price}, '${this.description}','${this.imageUrl}')`)
//     }
//     async updateProduct(){
//         const pool = await poolPromisse;
//         return await pool.query(`update products set title = '${this.title}', price = ${this.price}, description = '${this.description}', imageUrl = '${this.imageUrl}' where id = ${this.id}`)
//     }

//     static async fetchAll(){
//         try{
//             const pool = await poolPromisse
//             const result =  await pool.query('select * from products')
//             return result.recordset
//         }catch(err){
//             console.log(err)
//         }
//     }

//     static async deleteById(id){
//         const pool = await poolPromisse
//         await pool.query(`delete from products where id = ${id}`)
//     }

//     static async findById(id){
//         const pool = await poolPromisse
//         const product = await pool.query(`select * from products where id = ${id}`)
//         return product.recordset[0]
//     }
// }