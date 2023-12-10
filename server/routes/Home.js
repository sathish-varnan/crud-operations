const express = require('express')
const router = express.Router()
const { find, insertOne, updateOne} = require('../data/index')


const dummyUsers = [
    {
        name: 'sathish',
        age: 19,
    },
    {
        name: 'soumil',
        age: 20,
    },
    {
        name: 'Akash',
        age: 20,
    }
]

let variable = 0

router
.get('/get', async (req, res) => {
    try {
        const data = await find()
        res.json({res : "hey", data })
    } catch (error) {
        console.log("Error occured", error)
    }
})

router
.post('/post', async (req, res) => {
    try {
        const response = await insertOne(dummyUsers[variable % 3])
        console.log(`User ${dummyUsers[variable % 3].name} added with response : ${response}`)
        res.json({user: `Added ${dummyUsers[variable % 3].name}`})
    } catch (error) {
        console.log("Error in POST operation")
    }
})

router
.put('/put', async (req, res) => {
    try {
        const response = await updateOne('sathish', {name: 'sathish', age: 20})
        console.log("User updated", response)
        res.json({ updated: response })
    } catch (error) {
        console.log("Error occured")
    }
})

router
.delete('/delete', (req, res) => {
    res.json({user: "deleted"})
})


module.exports = router