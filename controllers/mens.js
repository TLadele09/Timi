const Mens = require('../models/mens');

exports.getMensProduct = (req, res) => {
    const mens = new Mens()
    result = mens.fetchProduct(2)
    temp = mens.fetchAllProducts()
    console.log(temp)
    res.render('mens', {title: 'KBC Mens', path: '/mens', temp: temp})
}
exports.postMensProduct = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result = mens.fetchProduct()
    temp = mens.fetchAllProducts()
    console.log(temp)
}