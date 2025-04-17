const Comment = require('./comment');

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId });
  res.json(comments);
};

exports.addComment = async (req, res) => {
  const newComment = new Comment({
    postId: req.params.postId,
    ...req.body
  });
  await newComment.save();
  res.status(201).json(newComment);
};
