const Mens = require('../models/mens');

exports.getMensProduct = (req, res) => {
    const mens = new Mens()
    result = mens.fetchProduct()
    temp = mens.fetchAllProducts()
    console.log(temp)
    res.render('mens', {title: 'KBC Mens', path: '/mens', temp: result})
}
exports.postMensProduct = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result = mens.fetchProduct()
    temp = mens.fetchAllProducts()
    console.log(temp)
}
exports.getMensJumpers = (req, res) => {
    const mens = new Mens()
    result2 = mens.jumpers()
    temp = mens.fetchAllProducts()
    console.log(temp)
    res.render('mensjumpers', {title: 'KBC Mens Jumpers', path: '/mensjumpers', temp: result2})
}
exports.postMensJumpers = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result2 = mens.jumpers()
    temp = mens.fetchAllProducts()
    console.log(temp)
}