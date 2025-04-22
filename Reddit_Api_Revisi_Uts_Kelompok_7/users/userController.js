const User = require('./user');

//Endpoint 8
async function register (req, res){
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
};

//Endpoint 9
async function login (req, res){
  const user = await User.findOne({ username: req.body.username, password: req.body.password });
  if (!user) return res.send('Invalid Username or Password');
  setTimeout(() =>{res.send(`Login Success. Welcome ${user.username}.`)},2000)};

//Enpoint 10
async function getProfile (req, res){
  const user = await User.findById(req.params.id);
  if(!user) return res.send('Cannot find user');
  res.send({username: user.username, 
            email: user.email, 
            joinedAt : user.joinedAt});
};

module.exports = {
  register,
  login,
  getProfile
}