const express = require('express')

const router = express.Router();

router.get('/add-products', (req, res, next) =>{
    console.log('In another middleware')
    res.send('<form action="/admin/add-products" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
})

router.post('/add-products', (req, res) =>{
    console.log(req.body)
    res.redirect('/')
})


module.exports = router