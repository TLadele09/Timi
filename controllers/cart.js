const Cart = require('../models/cart')

exports.getCart = (req, res) => {
    const cart = new Cart()
    result = cart.fetchProduct(2)
    res.render('cart', {title: 'CART', path: '/cart', data: result})
}

exports.postCart = (req, res) => {
    
    res.render('cart', {title: 'CART', path: '/cart',data: result})
}

