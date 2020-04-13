const Shop = require('../models/shop')
const Sizes = require('../models/sizes')

exports.getShopProducts = (req, res) => {
    const shop = new Shop()
    const result = shop.fetchProduct()
    temp = shop.fetchAllProducts()
    res.render('shop', {title: 'KBC SHOP', path: '/shop', data: result, temp: temp})
}
exports.getShopProduct = (req, res) => {
    const shop = new Shop()
    const sizes = new Sizes()
    const productSizes = sizes.fetchSizes()
    const colour = shop.fetchProducts()
    const productId = req.params.product_id
    result = shop.fetchProduct(parseInt(productId))
    console.log("This is", productSizes)  
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Product Detail', path: '/shop', temp: result, sizes: productSizes, colour: colour})
}
exports.postShopProducts = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const shop = new Shop()
    result = shop.fetchProduct()
    temp = shop.fetchAllProducts()
    // if (req.body.emailAddress==="timi"){
    //     res.render('shop', {title: 'SHOP', path: '/shop', data: result, sum: 2})
    // }
}
exports.getJumpers = (req, res) => {
    const shop = new Shop()
    result = shop.jumpers()
    temp = shop.fetchAllProducts()
    // console.log(temp)
    res.render('jumpers', {title: 'KBC Jumpers', path: '/jumpers', temp: result})
}
exports.getJumper = (req, res) => {
    const shop = new Shop()
    const sizes = new Sizes()
    const productSizes = sizes.fetchSizes()
    const colour = shop.fetchProducts()
    const productId = req.params.product_id
    result = shop.jumper(parseInt(productId))
    console.log(result)
    // console.log("This is", mensSizes)
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Jumper Detail', path: '/jumpers', temp: result, sizes: productSizes, colour: colour})
}
exports.postJumpers = (req, res) => {
    // console.log(req.body.emailAddress, req.body.password)
    const shop = new Shop()
    result = shop.jumpers()
    temp = shop.fetchAllProducts()
    // console.log(temp)
}
exports.getTshirts = (req, res) => {
    const shop = new Shop()
    result = shop.tshirts()
    temp = shop.fetchAllProducts()
    // console.log(temp)
    res.render('tshirts', {title: 'KBC T-Shirts', path: '/tshirts', temp: result})
}
exports.getTshirt = (req, res) => {
    const shop = new Shop()
    const sizes = new Sizes()
    const productSizes = sizes.fetchSizes()
    const colour = shop.fetchProducts()
    const productId = req.params.product_id
    result = shop.tshirt(parseInt(productId))
    console.log(result)
    // console.log("This is", mensSizes)
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC T-Shirt Detail', path: '/tshirts', temp: result, sizes: productSizes, colour: colour})
}
exports.postTshirts = (req, res) => {
    // console.log(req.body.emailAddress, req.body.password)
    const shop = new Shop()
    result = shop.tshirts()
    temp = shop.fetchAllProducts()
    // console.log(temp)
}
exports.getHoodie = (req, res) => {
    const shop = new Shop()
    const sizes = new Sizes()
    const productSizes = sizes.fetchSizes()
    const colour = shop.fetchProducts()
    const productId = req.params.product_id
    result = shop.tshirt(parseInt(productId))
    console.log(result)
    // console.log("This is", mensSizes)
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Hoodie Detail', path: '/hoodies', temp: result, sizes: productSizes, colour: colour})
}
exports.getHoodies = (req, res) => {
    const shop = new Shop()
    result = shop.hoodies()
    temp = shop.fetchAllProducts()
    // console.log(temp)
    res.render('hoodies', {title: 'KBC Hoodies', path: '/hoodies', temp: result})
}

exports.postHoodies = (req, res) => {
    // console.log(req.body.emailAddress, req.body.password)
    const shop = new Shop()
    result = shop.hoodies()
    temp = shop.fetchAllProducts()
    // console.log(temp)
}


