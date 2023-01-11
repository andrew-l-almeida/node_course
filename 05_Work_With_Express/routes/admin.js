const express = require('express')

const router = express.Router();

router.get('/add-products', (req, res, next) =>{
    console.log('In another middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
})

router.post('/product', (req, res) =>{
    console.log(req.body)
    res.redirect('/')
})


module.exports = router