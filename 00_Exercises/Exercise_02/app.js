const express = require('express')

const app = express()

app.use( (req, res, next) =>{
    console.log('First Middleware')
    next()
})

app.use( (req, res, next) =>{
    console.log('Second Middleware')
    next()
})

app.use('/users', (req, res, next) =>{
    console.log('Third middleware')
    res.send('<h1>Users: Andrew</h1>')
})
app.use('/', (req, res, next) =>{
    console.log('Fourth middleware')
    res.send('<h1>Initial Page</h1>')
})


app.listen(3000)