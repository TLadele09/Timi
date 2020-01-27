const express = require('express');
const mensController = require('../controllers/mens')
const router = express.Router();


router.get('/mens', mensController.getMensProduct)
router.post('/mens', mensController.postMensProduct)


module.exports = router