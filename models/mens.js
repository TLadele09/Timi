const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const adapter = new FileSync(path.join(__dirname, '../data', 'db.json'))
const db = low(adapter)

module.exports = class Mens {
    constructor(){
    }
    fetchProduct(productId){
        // console.log("inside model", productId)
        return db.get('products').find({product_id: productId}).value()
    }
    fetchProducts(){
        const newResults = []
        const results = db.get('products').filter({gender: "Mens"}).value()
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
    jumper(productId){
        // console.log("inside model", productId)
        return db.get('products').find({product_id: productId}).value()
    }
    jumpers(){
        return db.get('products').filter({gender: "Mens", product: "Jumper"}).value()
    }
    tshirt(productId){
        // console.log("inside model", productId)
        return db.get('products').find({product_id: productId}).value()
    }
    tshirts(){
        return db.get('products').filter({gender: "Mens", product: "T-Shirt"})
    }
    fetchAllProducts(){
        return db.get('products').value()
    }
}