const express = require('express');
const mensController = require('../controllers/mens')
const router = express.Router();


router.get('/mensjumpers', mensController.getMensJumpers)
router.post('/mensjumpers', mensController.postMensJumpers)

router.get('/mensjumpers/:product_id', mensController.getMensJumper)
module.exports = router