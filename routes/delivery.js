const express = require('express');
const router = express.Router();

router.get('/delivery', function (req, res) {
    res.render('delivery', {title: 'DELIVERY', path: '/delivery'})
});

router.post('/delivery', function (req, res) {
    res.render('delivery', {title: 'DELIVERY', path: '/delivery'})
});



module.exports = router