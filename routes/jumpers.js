const express = require('express');
const shopController = require('../controllers/shop')
const router = express.Router();


router.get('/jumpers', shopController.getJumpers)
router.post('/jumpers', shopController.postJumpers)

router.get('/jumpers/:product_id', shopController.getJumper)
module.exports = router