const express = require('express');
// Import routes dari fitur-fitur
const postRoutes = require('./features/posts/routes');
// jika ada fitur auth:
// const authRoutes = require('./features/auth/routes');

const router = express.Router();

// memasang route
router.use('/posts', postRoutes);
// router.use('/auth', authRoutes);

module.exports = router;
