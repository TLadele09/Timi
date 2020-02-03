const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const adapter = new FileSync(path.join(__dirname, '../data', 'db.json'))
const db = low(adapter)

module.exports = class Womens {
    constructor(){
    }
    fetchProduct(){
        return db.get('products').filter({gender: "Womens"}).value()
    }
    jumpers(){
        return db.get('products').filter({gender: "Womens", product: "Jumper"})
    }
    fetchAllProducts(){
        return db.get('products').value()
    }
}