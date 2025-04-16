const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getProfile
} = require('./userController');

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getProfile);

module.exports = router;
