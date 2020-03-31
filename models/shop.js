const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const adapter = new FileSync(path.join(__dirname, '../data', 'db.json'))
const db = low(adapter)

module.exports = class Shop {
    constructor(){
    }
    fetchProduct(productId){
        // console.log("inside model", productId)
        return db.get('products').find({product_id: productId}).value()
    }
    fetchAllProducts(){
        return db.get('products').value()
    }

    verifyLogin(name){
        return db
        .get('users')
        .find({ name: name})
        .value()
    }
    
    
}