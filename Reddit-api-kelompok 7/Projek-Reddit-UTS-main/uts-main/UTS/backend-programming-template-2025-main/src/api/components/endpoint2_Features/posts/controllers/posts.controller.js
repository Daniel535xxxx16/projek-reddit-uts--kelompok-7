const PostsService = require('../services/posts.service');

exports.getHotPosts = async (req, res) => {
  const posts = await PostsService.getHotPosts();
  res.json(posts);
};