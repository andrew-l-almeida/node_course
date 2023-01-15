const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const routes = require('./routes/routes')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(routes)

app.listen(3000);