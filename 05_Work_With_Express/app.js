const express = require('express')

const app = express();

app.use('/products', (req, res, next) =>{
    console.log('In another middleware')
    res.send('<h1>Products</h1>')
})
app.use('/', (req, res, next) =>{
    console.log('In another middleware')
    res.send('<h1>Andrew</h1>')
})

app.listen(3000)