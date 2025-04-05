const authRoutes = require('./features/auth/routes');
const postsRoutes = require('./features/posts/routes');
const usersRoutes = require('./features/users/routes');

module.exports = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/posts', postsRoutes);
  app.use('/api/v1/users', usersRoutes);
};