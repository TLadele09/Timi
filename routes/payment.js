const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/payment', function (req, res) {
    res.render('payment', {title: 'KBC Payment', path: '/payment' })
});
router.post('/payment', function (req, res) {
    res.render('payment', {title: 'KBC Payment', path: '/payment' })
});

module.exports = router