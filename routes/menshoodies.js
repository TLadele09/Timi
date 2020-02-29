const express = require('express');
const mensController = require('../controllers/mens')
const router = express.Router();


router.get('/menshoodies', mensController.getMensHoodies)
router.post('/menshoodies', mensController.postMensHoodies)

router.get('/menshoodies/:product_id', mensController.getMensHoodie)
module.exports = router