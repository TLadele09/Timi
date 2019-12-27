const express = require('express');
const path = require('path')
const loginController = require('../controllers/login')
const router = express.Router();

router.get('/login', loginController.getLogin)
router.post('/login', loginController.postRegisterUser)

module.exports = router