const express = require('express');
const router = express.Router();
const {
  getPosts,
  createPost,
  upvotePost,
  downvotePost,
  deletePost
} = require('./postController');

router.get('/', getPosts);
router.post('/', createPost);
router.post('/:id/upvote', upvotePost);
router.post('/:id/downvote', downvotePost);
router.delete('/:id', deletePost);

module.exports = router;