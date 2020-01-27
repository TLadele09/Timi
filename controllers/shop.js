const Shop = require('../models/shop')

exports.getShopProduct = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const shop = new Shop()
    const result = shop.fetchProduct()
    temp = shop.fetchAllProducts()
    res.render('shop', {title: 'SHOP', path: '/shop', data: result, temp: temp})
}
exports.postShopProduct = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const shop = new Shop()
    result = shop.fetchProduct()
    temp = shop.fetchAllProducts()
    // if (req.body.emailAddress==="timi"){
    //     res.render('shop', {title: 'SHOP', path: '/shop', data: result, sum: 2})
    // }
    const user = shop.verifyLogin(req.body.emailAddress)
    console.log(user)
    if (user){
        res.render('shop', {title: 'SHOP', path: '/shop', data: result, sum: 2})
    }
    else {
        res.redirect('/')
    }
}
shopAddition = (num1, num2) => {
    return num1 + num2
}

