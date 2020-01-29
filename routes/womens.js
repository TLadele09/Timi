const express = require('express');
const mensController = require('../controllers/womens')
const router = express.Router();


router.get('/womens', mensController.getWomensProduct)
router.post('/womens', mensController.postWomensProduct)


module.exports = router