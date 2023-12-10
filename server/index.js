const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const homeRoute = require('./routes/Home')
const { connectDB } = require('./data/index')

app.use(express.static('build'))
app.use('/', homeRoute)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})

connectDB("mongodb://localhost:27017/school")