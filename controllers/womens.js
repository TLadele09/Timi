const Womens = require('../models/womens');

exports.getWomensProduct = (req, res) => {
    const womens = new Womens()
    result = womens.fetchProduct()
    temp = womens.fetchAllProducts()
    console.log(temp)
    res.render('womens', {title: 'KBC Womens', path: '/womens', temp: result})
}
exports.postWomensProduct = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const womens = new Womens()
    result = womens.fetchProduct()
    temp = womens.fetchAllProducts()
    console.log(temp)
}

exports.getWomensJumpers = (req, res) => {
    const womens = new Womens()
    result2 = womens.jumpers()
    temp = womens.fetchAllProducts()
    console.log(temp)
    res.render('womensjumpers', {title: 'KBC Womens Jumpers', path: '/womensjumpers', temp: result2})
}
exports.postWomensJumpers = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const womens = new Womens()
    result2 = womens.jumpers()
    temp = womens.fetchAllProducts()
    console.log(temp)
}
