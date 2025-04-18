const User = require('./user');

exports.register = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username, password: req.body.password });
  if (!user) return res.send('Invalid Username or Password');
  setTimeout(() =>{res.send(`Login Success. Welcome ${user.username}.`)},2000)};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.params.id);
  if(!user) return res.send('Cannot find user');
  res.send({username: user.username, 
            email: user.email, 
            joinedAt : user.joinedAt});
};
