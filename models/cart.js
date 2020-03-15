const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const adapter = new FileSync(path.join(__dirname, '../data', 'db.json'))
const db = low(adapter)

module.exports = class Cart {
    constructor(){
    }
    add_cart(count) {
        return db
        .get('carts')
        .get('products')
        .push({count: count})
        .write()
        .id
    }
    fetchProduct(idx){
        return db.get('products')
        .find({product_id: idx})
        .value()
    }
    saveToCart(prodId,size,qty){
        //get customers id from cart
        const cts = db.get('carts').find({customer_id:"1CW67OZQ"})
        //retrieve products array from cart
        const prods = cts.value().products
        //push new product into array
        prods.push({product_id: prodId, quantity: qty, size: size})
        //update the db with new product
        cts.assign({products:prods}).write()
    }
}