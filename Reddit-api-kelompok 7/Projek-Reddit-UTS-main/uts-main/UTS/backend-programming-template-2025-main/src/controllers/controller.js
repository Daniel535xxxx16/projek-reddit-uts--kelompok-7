const User = require('../models/user.model');

exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: 'demo_user' });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      name: user.username,
      karma: user.karma,
      created: user.created_at
    });
  } catch (err) {
    next(err);
  }
};