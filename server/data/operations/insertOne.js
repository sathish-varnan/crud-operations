const Users = require('../models/Users')

const insertOne = async (userData) => {
    try {
        const user = new Users(userData)
        const response = await user.save()
        console.log(`Added user : ${user}, with a status of ${response}`)
    } catch (error) {
        console.error(`Error finding the users : ${error}`)
    }
}

module.exports = insertOne