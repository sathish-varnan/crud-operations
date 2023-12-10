const Users = require('../models/Users')

const updateOne = async (name, updatedData) => {
    try {
        const response = await Users.updateOne({name: name}, {$set: updatedData})
        console.log('User updated successfully: ', response)
        return response
    } catch (error) {
        console.log("Error in updatedOne.js")
    }
}

module.exports = updateOne