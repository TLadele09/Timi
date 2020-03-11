const express = require('express');
const womensController = require('../controllers/womens')
const router = express.Router();


router.get('/womenshoodies', womensController.getWomensHoodies)
router.post('/womenshoodies', womensController.postWomensHoodies)

router.get('/womenshoodies/:product_id', womensController.getWomensHoodie)
module.exports = router