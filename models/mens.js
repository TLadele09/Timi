const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const adapter = new FileSync(path.join(__dirname, '../data', 'db.json'))
const db = low(adapter)

module.exports = class Mens {
    constructor(){
    }
    fetchProduct(){
        return db.get('products').filter({gender: "Mens"}).value()
    }
    jumpers(){
        return db.get('products').filter({gender: "Mens", product: "Jumper"}).value()
    }
    tshirts(){
        return db.get('products').filter({gender: "Mens", product: "T-Shirt"})
    }
    fetchAllProducts(){
        return db.get('products').value()
    }
}