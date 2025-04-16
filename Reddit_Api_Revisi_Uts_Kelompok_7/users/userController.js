const User = require('./user');

exports.register = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username, password: req.body.password });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  res.json(user);
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};
