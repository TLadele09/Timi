const express = require('express');
const womensController = require('../controllers/womens')
const router = express.Router();


router.get('/womenstshirts', womensController.getWomensTshirts)
router.post('/womenstshirts', womensController.postWomensTshirts)

router.get('/womenstshirts/:product_id', womensController.getWomensTshirt)
module.exports = router