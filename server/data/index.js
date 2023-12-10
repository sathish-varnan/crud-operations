const mongoose = require('mongoose')
const find = require('./operations/find')
const insertOne = require('./operations/insertOne')
const updateOne = require('./operations/updateOne')

const connectDB = (url) => {
    mongoose
    .connect(url) // 'mongodb://localhost:27017/school'
    .then(response => console.log(`Connected to the database`))
    .catch(err => console.log(`Error occured ${err}`))    
}

module.exports = { connectDB, find, insertOne, updateOne}