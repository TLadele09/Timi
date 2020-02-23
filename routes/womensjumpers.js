const express = require('express');
const womensController = require('../controllers/womens')
const router = express.Router();


router.get('/womensjumpers', womensController.getWomensJumpers)
router.post('/womensjumpers', womensController.postWomensJumpers)

router.get('/womensjumpers/:product_id', womensController.getWomensJumper)

module.exports = router