const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false})) //Middleware to parse the body requests

app.use('/add-products', (req, res, next) =>{
    console.log('In another middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
})

app.use('/product', (req, res) =>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/', (req, res, next) =>{
    console.log('In another middleware')
    res.send('<h1>Andrew</h1>')
})

app.listen(3000)