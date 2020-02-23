const express = require('express');
const mensController = require('../controllers/mens')
const router = express.Router();


router.get('/menstshirts', mensController.getMensTshirts)
router.post('/menstshirts', mensController.postMensTshirts)

router.get('/menstshirts/:product_id', mensController.getMensTshirt)
module.exports = router