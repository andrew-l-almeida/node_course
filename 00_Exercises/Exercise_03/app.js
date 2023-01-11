const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const usersRoutes = require('./routes/users')
const mainRoutes = require('./routes/main')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use('/admin',usersRoutes)
app.use(mainRoutes)
app.use((req, res) =>{
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'))
})


app.listen(3000)