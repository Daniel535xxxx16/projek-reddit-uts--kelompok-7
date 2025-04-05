exports.getCurrentUser = (req, res) => {
  res.json({ 
    id: req.user.id, 
    username: req.user.username 
  });
};