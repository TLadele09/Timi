const express = require('express');
const router = express.Router();

router.get('/contact', function (req, res) {
    res.render('contact', {title: 'CONTACT', path: '/contact' })
});



module.exports = router