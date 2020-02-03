const express = require('express');
const womensController = require('../controllers/womens')
const router = express.Router();


router.get('/womens', womensController.getWomensProduct)
router.post('/womens', womensController.postWomensProduct)


module.exports = router