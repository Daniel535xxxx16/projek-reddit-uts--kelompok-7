const express = require('express');
const router = express.Router();
const AuthController = require('./controllers/auth.controller');

router.get('/me', AuthController.getCurrentUser);
module.exports = router;