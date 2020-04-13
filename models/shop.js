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
    fetchProducts(){
        const newResults = []
        const results = db.get('products').value()
        // console.log('=========FETCHPRODUCT========')
        // console.log(results[0])
        // console.log('=========ENDPRODUCT========')
        for (let product of results){
            // console.log('=========FORLOOP========')
            // console.log(product.colour_id)
            // console.log('=========ENDFORLOOP========')
            const colourNew =  db.get('colours').find({colour_id: product.colour_id}).value()
            // console.log(colour.colour)
            const item = {...product, colour:colourNew.colour}
            newResults.push(item)
            // console.log(item)
        }
        return newResults
    }
    fetchAllProducts(){
        return db.get('products').value()
    }
    jumper(productId){
        // console.log("inside model", productId)
        return db.get('products').find({product_id: productId}).value()
    }
    jumpers(){
        return db.get('products').filter({product: "Jumper"}).value()
    }
    tshirt(productId){
        return db.get('products').find({product_id: productId}).value()
    }
    tshirts(){
        return db.get('products').filter({product: "T-Shirt"})
    }
    hoodie(productId){
        return db.get('products').find({product_id: productId}).value()
    }
    hoodies(){
        return db.get('products').filter({product: "Hoodie"}).value()
    }

    verifyLogin(name){
        return db
        .get('users')
        .find({ name: name})
        .value()
    }
    
    
}