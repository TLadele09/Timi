const express = require('express');
const mensController = require('../controllers/mens')
const router = express.Router();


router.get('/mensjumpers', mensController.getMensJumpers)
router.post('/mensjumpers', mensController.postMensJumpers)


module.exports = router