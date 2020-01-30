const express = require('express');
const router = express.Router();

router.get('/contact', function (req, res) {
    res.render('contact', {title: 'KBC Contact', path: '/contact' })
});



module.exports = router