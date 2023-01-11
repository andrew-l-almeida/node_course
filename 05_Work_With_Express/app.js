const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false})) //Middleware to parse the body requests

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use((req, res) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

console.log('listin in: localhost:3000')
app.listen(3000)