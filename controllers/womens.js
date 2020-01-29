const Womens = require('../models/womens');

exports.getWomensProduct = (req, res) => {
    const womens = new Womens()
    result = womens.fetchProduct(2)
    temp = womens.fetchAllProducts()
    console.log(temp)
    res.render('womens', {title: 'WOMENS', path: '/womens', temp: temp})
}
exports.postWomensProduct = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const womens = new Womens()
    result = womens.fetchProduct()
    temp = womens.fetchAllProducts()
    console.log(temp)
}