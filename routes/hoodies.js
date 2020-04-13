const express = require('express');
const shopController = require('../controllers/shop')
const router = express.Router();


router.get('/hoodies', shopController.getHoodies)
router.post('/hoodies', shopController.postHoodies)

router.get('/hoodies/:product_id', shopController.getHoodie)
module.exports = router