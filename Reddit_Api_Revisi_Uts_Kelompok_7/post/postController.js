const Post = require('./post');

exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.status(201).json(newPost);
};

exports.upvotePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { upvotes: 1 } }, { new: true });
  res.json(post);
};

exports.downvotePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { downvotes: 1 } }, { new: true });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
};
