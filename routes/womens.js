const express = require('express');
const womensController = require('../controllers/womens')
const router = express.Router();


router.get('/womens', womensController.getWomensProducts)
router.post('/womens', womensController.postWomensProducts)

router.get('/womens/:product_id', womensController.getWomensProduct)
module.exports = router