const Post = require('./post');

//Endpoint 3
async function getPosts(req, res){
  const posts = await Post.findById(req.params.id);
  res.json(posts);
};

//Endpoint 4
async function createPost(req, res){
  const newPost = new Post(req.body);
  await newPost.save();
  res.status(201).json(newPost);
};

//Endpoint 5
async function upvotePost(req, res){
  const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { upvotes: 1 } }, { new: true });
  res.json(post);
};

//Endpoint 6
async function downvotePost(req, res){
  const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { downvotes: 1 } }, { new: true });
  res.json(post);
};

//Endpoint 7
async function deletePost(req, res){
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
};

module.exports = {
  getPosts,
  createPost,
  upvotePost,
  downvotePost,
  deletePost
}
