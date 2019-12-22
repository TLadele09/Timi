const express = require('express');
const path = require('path')
const router = express.Router();

router.post('/signup', function (req, res) {
    res.render('signup', {title: 'CREATE ACCOUNT', path: '/signup' })
});


module.exports = router