const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/v1/me', userController.getMe); //  meniru referensi dari Reddit's /api/v1/me

module.exports = () => router;