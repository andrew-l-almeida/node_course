const express = require('express')

const routes = express.Router();

const users = []

routes.get('/', (req, res) =>{
    res.render('main', {title: 'Add users'})
})
routes.get('/users', (req, res) =>{
    res.render('users', {title: 'Users'})
})
routes.post('/users', (req, res) =>{
    users.push({name: req.body.name, id: users.length})
    res.render('users', {users})
})
module.exports = routes;