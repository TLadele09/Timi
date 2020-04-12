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
    const productId = req.params.product_id
    result = shop.fetchProduct(parseInt(productId))
    console.log("This is", productSizes)  
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Product Detail', path: '/shop', temp: result, sizes: productSizes})
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
shopAddition = (num1, num2) => {
    return num1 + num2
}

