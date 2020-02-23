const Mens = require('../models/mens');

exports.getMensProduct = (req, res) => {
    const mens = new Mens()
    result = mens.fetchProduct()
    temp = mens.fetchAllProducts()
    // console.log(temp)
    res.render('mens', {title: 'KBC Mens', path: '/mens', temp: result})
}
exports.postMensProduct = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result = mens.fetchProduct()
    temp = mens.fetchAllProducts()
    // console.log(temp)
}
exports.getMensJumpers = (req, res) => {
    const mens = new Mens()
    result2 = mens.jumpers()
    temp = mens.fetchAllProducts()
    // console.log(temp)
    res.render('mensjumpers', {title: 'KBC Mens Jumpers', path: '/mensjumpers', temp: result2})
}
exports.getMensJumper = (req, res) => {
    const mens = new Mens()
    const productId = req.params.product_id
    result = mens.jumper(parseInt(productId))
    console.log(result)
    // console.log("This is the product ID", productId)
    res.render('mensJumperDetail', {title: 'KBC Mens Jumper Detail', path: '/mensjumpers', temp: result})

}
exports.postMensJumpers = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result2 = mens.jumpers()
    temp = mens.fetchAllProducts()
    // console.log(temp)
}
exports.getMensTshirts = (req, res) => {
    const mens = new Mens()
    result2 = mens.tshirts()
    temp = mens.fetchAllProducts()
    // console.log(temp)
    res.render('menstshirts', {title: 'KBC Mens Jumpers', path: '/menstshirts', temp: result2})
}
exports.getMensTshirt = (req, res) => {
    const mens = new Mens()
    const productId = req.params.product_id
    result = mens.tshirt(parseInt(productId))
    console.log(result)
    // console.log("This is the product ID", productId)
    res.render('mensJumperDetail', {title: 'KBC Mens Tshirt Detail', path: '/menstshirt', temp: result})

}
exports.postMensTshirts = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result2 = mens.tshirts()
    temp = mens.fetchAllProducts()
    // console.log(temp)
}