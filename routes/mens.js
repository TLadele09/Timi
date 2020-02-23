const express = require('express');
const mensController = require('../controllers/mens')
const router = express.Router();


router.get('/mens', mensController.getMensProducts)
router.post('/mens', mensController.postMensProducts)

router.get('/mens/:product_id', mensController.getMensProduct)
module.exports = router