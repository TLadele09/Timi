const express = require('express');
const path = require('path')
const cartController = require('../controllers/cart')
const router = express.Router();

router.get('/cart', cartController.getCart)
router.post('/cart', cartController.postCart)




module.exports = router