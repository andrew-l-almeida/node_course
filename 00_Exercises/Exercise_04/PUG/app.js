const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const routes = require('./routes/routes')

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(routes)

app.use('/', (req, res) =>{
    res.render('404', {title: 'Page not found'})
})
app.listen(3000)