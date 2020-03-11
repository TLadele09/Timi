const Mens = require('../models/mens');
const Sizes = require('../models/sizes')

exports.getMensProducts = (req, res) => {
    const mens = new Mens()
    result = mens.fetchProducts()
    // console.log(temp)
    res.render('mens', {title: 'KBC Mens', path: '/mens', temp: result})
}
exports.getMensProduct = (req, res) => {
    const mens = new Mens()
    const sizes = new Sizes()
    const mensSizes = sizes.fetchSizes()
    const productId = req.params.product_id
    result = mens.fetchProduct(parseInt(productId))
    console.log("This is", mensSizes)  
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Mens Product Detail', path: '/mens', temp: result, sizes: mensSizes})
}
exports.postMensProducts = (req, res) => {
    // console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result = mens.fetchProduct()
    temp = mens.fetchAllProducts()
    // console.log(temp)
}
exports.getMensJumpers = (req, res) => {
    const mens = new Mens()
    result = mens.jumpers()
    temp = mens.fetchAllProducts()
    // console.log(temp)
    res.render('mensjumpers', {title: 'KBC Mens Jumpers', path: '/mensjumpers', temp: result})
}
exports.getMensJumper = (req, res) => {
    const mens = new Mens()
    const sizes = new Sizes()
    const mensSizes = sizes.fetchSizes()
    const colour = mens.fetchProducts()
    const productId = req.params.product_id
    result = mens.jumper(parseInt(productId))
    console.log(result)
    console.log(colour)
    // console.log("This is", mensSizes)
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Mens Jumper Detail', path: '/mensjumpers', temp: result, sizes: mensSizes, colour: colour})
}
exports.postMensJumpers = (req, res) => {
    // console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result = mens.jumpers()
    temp = mens.fetchAllProducts()
    // console.log(temp)
}
exports.getMensTshirts = (req, res) => {
    const mens = new Mens()
    result = mens.tshirts()
    temp = mens.fetchAllProducts()
    // console.log(temp)
    res.render('menstshirts', {title: 'KBC Mens T-Shirts', path: '/menstshirts', temp: result})
}
exports.getMensTshirt = (req, res) => {
    const mens = new Mens()
    const sizes = new Sizes()
    const mensSizes = sizes.fetchSizes()
    const productId = req.params.product_id
    result = mens.tshirt(parseInt(productId))
    console.log(result)
    // console.log("This is", mensSizes)
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Mens T-Shirt Detail', path: '/menstshirt', temp: result, sizes: mensSizes})
}
exports.postMensTshirts = (req, res) => {
    // console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result = mens.tshirts()
    temp = mens.fetchAllProducts()
    // console.log(temp)
}
exports.getMensHoodie = (req, res) => {
    const mens = new Mens()
    const sizes = new Sizes()
    const mensSizes = sizes.fetchSizes()
    const productId = req.params.product_id
    result = mens.hoodie(parseInt(productId))
    console.log(result)
    // console.log("This is", mensSizes)
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Mens Hoodies Detail', path: '/menshoodies', temp: result, sizes: mensSizes})
}
exports.getMensHoodies = (req, res) => {
    const mens = new Mens()
    result = mens.hoodies()
    temp = mens.fetchAllProducts()
    // console.log(temp)
    res.render('menshoodies', {title: 'KBC Mens Hoodies', path: '/menshoodies', temp: result})
}

exports.postMensHoodies = (req, res) => {
    // console.log(req.body.emailAddress, req.body.password)
    const mens = new Mens()
    result = mens.hoodies()
    temp = mens.fetchAllProducts()
    // console.log(temp)
}