const express = require('express');
const Mens = require('../models/mens');
const router = express.Router();


router.get('/mens', function (req, res) {
    const mens = new Mens()
    result = mens.fetchProduct(2)
    res.render('mens', {title: 'MENS', path: '/mens', data: result})
});

module.exports = router