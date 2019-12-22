const express = require('express');
const path = require('path')
const router = express.Router();

router.post('/login', function (req, res) {
    res.render('login', {title: 'LOGIN', path: '/login' })
});




module.exports = router