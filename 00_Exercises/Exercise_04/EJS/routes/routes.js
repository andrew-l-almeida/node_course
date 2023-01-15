const express = require('express');


const users = []

const routes = express.Router();

routes.get('/', (req, res) =>{
    res.render('main',{title: 'Add name'})
})
routes.get('/users', (req, res)=>{
    res.render('users', {title: 'Users',users})
})
routes.post('/users', (req, res)=>{
    users.push({name: req.body.name, id: users.length})
    res.redirect('/users')
})




module.exports = routes;