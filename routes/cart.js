const express = require('express');
const router = express.Router();

router.get('/cart', function (req, res) {
    res.render('cart', {title: 'CART', path: '/cart' })
});



module.exports = router