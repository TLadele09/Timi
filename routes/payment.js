const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/payment', function (req, res) {
    res.render('payment', {title: 'PAYMENT', path: '/payment' })
});
router.post('/payment', function (req, res) {
    res.render('payment', {title: 'PAYMENT', path: '/payment' })
});

module.exports = router