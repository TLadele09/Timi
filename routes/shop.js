const express = require('express');
const shopController = require('../controllers/shop')
const router = express.Router();

router.get('/shop', shopController.getShopProducts)
router.post('/shop', shopController.postShopProducts)

router.get('/shop/:product_id', shopController.getShopProduct)
module.exports = router