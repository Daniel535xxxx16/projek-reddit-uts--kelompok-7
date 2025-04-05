const UsersRepository = require('../repositories/users.repository');

exports.getSavedPosts = async (req, res) => {
  const savedPosts = await UsersRepository.getSavedPosts(req.params.username);
  res.json(savedPosts);
};