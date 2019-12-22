const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/', function (req, res) {
    res.render('home', {title: 'HOME', path: '/' })
});


module.exports = router