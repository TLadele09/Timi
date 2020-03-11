const Womens = require('../models/womens')
const Sizes = require('../models/sizes')


exports.getWomensProducts = (req, res) => {
    const womens = new Womens()
    result = womens.fetchProducts()
    // console.log(temp)
    res.render('womens', {title: 'KBC Womens', path: '/womens', temp: result})
}
exports.getWomensProduct = (req, res) => {
    const womens = new Womens()
    const sizes = new Sizes()
    const womensSizes = sizes.fetchSizes()
    const productId = req.params.product_id
    result = womens.fetchProduct(parseInt(productId))
    console.log("This is", womensSizes)  
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Womens Product Detail', path: '/womens', temp: result, sizes: womensSizes})
}

exports.postWomensProducts = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const womens = new Womens()
    result = womens.fetchProduct()
    temp = womens.fetchAllProducts()
    // console.log(temp)
}
exports.getWomensJumpers = (req, res) => {
    const womens = new Womens()
    result = womens.jumpers()
    temp = womens.fetchAllProducts()
    // console.log(temp)
    res.render('womensjumpers', {title: 'KBC Womens Jumpers', path: '/womensjumpers', temp: result})
}
exports.getWomensJumper = (req, res) => {
    const womens = new Womens()
    const sizes = new Sizes()
    const womensSizes = sizes.fetchSizes()
    const productId = req.params.product_id
    result = womens.jumper(parseInt(productId))
    console.log("This is", womensSizes) 
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Womens Jumper Detail', path: '/womensjumpers', temp: result, sizes: womensSizes})

}
exports.postWomensJumpers = (req, res) => {
    console.log(req.body.emailAddress, req.body.password)
    const womens = new Womens()
    result2 = womens.jumpers()
    temp = womens.fetchAllProducts()
    // console.log(temp)
}
exports.getWomensTshirts = (req, res) => {
    const womens = new Womens()
    result = womens.tshirts()
    temp = womens.fetchAllProducts()
    // console.log(temp)
    res.render('womenstshirts', {title: 'KBC Womens T-Shirts', path: '/womenstshirts', temp: result})
}
exports.getWomensTshirt = (req, res) => {
    const womens = new Womens()
    const sizes = new Sizes()
    const womensSizes = sizes.fetchSizes()
    const productId = req.params.product_id
    result = womens.tshirt(parseInt(productId))
    console.log(result)
    // console.log("This is", mensSizes)
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Womens Tshirt Detail', path: '/womenstshirt', temp: result, sizes: womensSizes})
}
exports.postWomensTshirts = (req, res) => {
    // console.log(req.body.emailAddress, req.body.password)
    const womens = new Womens()
    result = womens.tshirts()
    temp = womens.fetchAllProducts()
    // console.log(temp)
}
exports.getWomensHoodie = (req, res) => {
    const womens = new Womens()
    const sizes = new Sizes()
    const womensSizes = sizes.fetchSizes()
    const productId = req.params.product_id
    result = womens.hoodie(parseInt(productId))
    console.log(result)
    // console.log("This is", womensSizes)
    // console.log("This is the product ID", productId)
    res.render('detailpage', {title: 'KBC Womens Hoodies Detail', path: '/womenshoodies', temp: result, sizes: womensSizes})
}
exports.getWomensHoodies = (req, res) => {
    const womens = new Womens()
    result = womens.hoodies()
    temp = womens.fetchAllProducts()
    // console.log(temp)
    res.render('womenshoodies', {title: 'KBC Womens Hoodies', path: '/womenshoodies', temp: result})
}

exports.postWomensHoodies = (req, res) => {
    // console.log(req.body.emailAddress, req.body.password)
    const womens = new Womens()
    result = womens.hoodies()
    temp = womens.fetchAllProducts()
    // console.log(temp)
}
