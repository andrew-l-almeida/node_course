const express = require('express')
const path = require('path')

const routes = express.Router()

routes.get('/add-user', (req, res) =>{
    res.sendFile(path.join(__dirname, '../', 'view', 'users.html'))
})
routes.post('/add-user', (req, res) =>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = routes