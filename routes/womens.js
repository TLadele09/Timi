const express = require('express');
const Womens = require('../models/womens');
const router = express.Router();

router.get('/womens', function (req, res) {
    const womens = new Womens()
    result = womens.fetchProduct(2)
    res.render('womens', {title: 'WOMENS', path: '/womens', data:result})
});

module.exports = router