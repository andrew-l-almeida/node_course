const express = require('express')

const routes = require('./routes/routes')

const app = express();
app.set('view engine', 'pug')
app.set('views', 'views')

app.use(routes)

app.use('/', (req, res) =>{
    res.render('404', {title: 'Page not found'})
})
app.listen(3000)