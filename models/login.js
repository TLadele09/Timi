const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const adapter = new FileSync(path.join(__dirname, '../data', 'db.json'))
const db = low(adapter)

module.exports = class Login {
    constructor(){
    }
    registerUser(firstname, surname, emailAddress, houseNumber, streetName, city, country, password){
        return db
        .get('users')
        .push({ firstname: firstname, surname: surname, emailAddress: emailAddress, houseNumber: houseNumber, streetName: streetName, city: city, country: country, password: password})
        .write()
        .name
    }
}