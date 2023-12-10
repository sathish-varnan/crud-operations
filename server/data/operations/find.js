const Users = require('../models/Users')

const find = async (query = {}) => {    
    try {
        const data = await Users.find(query)
        console.log(`found : ${data}`)
        return data
    } catch (error) {
        console.error(`Error finding the users : ${error}`)
    }
    
}

module.exports = find