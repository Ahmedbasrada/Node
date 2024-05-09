const express = require('express');
const router = express.Router();
const controller = require('../controllers/authContorler')
const auth = require('../middelware/auth')

router.post('/login', controller.login)
router.post('/register', controller.register)
router.post('/me',  controller.me)


module.exports = router;
