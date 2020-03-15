const Cart = require('../models/cart')

exports.getCart = (req, res) => {
    const cart = new Cart()
    const result = cart.fetchProduct()
    res.render('cart', {title: 'CART', path: '/cart', data: result})
}

exports.postCart = (req, res) => {
    const cart = new Cart()
    console.log("This is Cart Product Id", req.body.productId)
    console.log("This is Cart Size", req.body.ps)
    console.log("This is Cart Quantity", req.body.qty)
    //save data to database
    const id = cart.saveToCart(parseInt(req.body.productId), req.body.ps, parseInt(req.body.qty))
    console.log("save to cart", id)
    //read cart table and send all of the data through to the table below
    const result = cart.fetchProduct(parseInt(req.body.productId))
    res.render('cart', {title: 'CART', path: '/cart', data: result})
}

