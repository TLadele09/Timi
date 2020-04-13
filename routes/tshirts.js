const express = require('express');
const shopController = require('../controllers/shop')
const router = express.Router();


router.get('/tshirts', shopController.getTshirts)
router.post('/tshirts', shopController.postTshirts)

router.get('/tshirts/:product_id', shopController.getTshirt)
module.exports = router