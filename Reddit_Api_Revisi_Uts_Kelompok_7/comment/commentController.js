const Comment = require('./comment');

//Endpoint 1
async function getComments(req, res){
  const comments = await Comment.find({ postId: req.params.postId });
  res.json(comments);
};

//Endpoint 2
async function addComment(req, res){
  const newComment = new Comment({
    postId: req.params.postId,
    ...req.body
  });
  await newComment.save();
  res.status(201).json(newComment);
};

module.exports = {
  getComments,
  addComment
}