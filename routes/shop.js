const express = require('express');
const shopController = require('../controllers/shop')
const router = express.Router();

router.get('/shop', shopController.getShopProduct)
router.post('/shop', shopController.postShopProduct)


module.exports = router