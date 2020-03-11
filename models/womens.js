const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const adapter = new FileSync(path.join(__dirname, '../data', 'db.json'))
const db = low(adapter)

module.exports = class Womens {
    constructor(){
    }
    fetchProduct(productId){
        return db.get('products').find({product_id: productId}).value()
    }
    fetchProducts(){
        const newResults = []
        const results = db.get('products').filter({gender: "Womens"}).value()
        for (let product of results){
            const colourNew =  db.get('colours').find({colour_id: product.colour_id}).value()
            const item = {...product, colour:colourNew.colour}
            newResults.push(item)
            // Adding colour to each product
        }
        return newResults
    }
    jumper(productId){
        // console.log("inside model", productId)
        return db.get('products').find({product_id: productId}).value()
    }
    jumpers(){
        return db.get('products').filter({gender: "Womens", product: "Jumper"})
    }
    tshirt(productId){
        return db.get('products').find({product_id: productId}).value()
    }
    tshirts(){
        return db.get('products').filter({gender: "Womens", product: "T-Shirt"})
    }
    hoodie(productId){
        return db.get('products').find({product_id: productId}).value()
    }
    hoodies(){
        return db.get('products').filter({gender: "Womens", product: "Hoodie"}).value()
    }
    fetchAllProducts(){
        return db.get('products').value()
    }
}