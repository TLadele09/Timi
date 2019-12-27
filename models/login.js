const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const adapter = new FileSync(path.join(__dirname, '../data', 'db.json'))
const db = low(adapter)

module.exports = class Login {
    constructor(){
    }
    registerUser(name, emailAddress, password){
        return db
        .get('users')
        .push({ name: name, emailAddress: emailAddress, password: password})
        .write()
        .name
    }
}