const express = require('express');
const Shop = require('../models/shop')
const router = express.Router();

router.get('/shop', function (req, res) {
    const shop = new Shop()
    result = shop.fetchProduct(2)
    res.render('shop', {title: 'SHOP', path: '/shop', data: result})
});

module.exports = router