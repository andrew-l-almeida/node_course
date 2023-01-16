const express = require('express')

const routes = express.Router();

routes.get('/', (req, res) =>{
    res.render('main', {title: 'Add users'})
})
routes.get('/users', (req, res) =>{
    res.render('users', {title: 'Users'})
})
module.exports = routes;