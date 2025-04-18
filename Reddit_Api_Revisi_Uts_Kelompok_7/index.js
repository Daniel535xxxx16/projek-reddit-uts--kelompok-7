
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const postRoutes = require('./post/postsRoute');
const commentRoutes = require('./comment/commentsRoute');
const userRoutes = require('./users/usersRoute');

app.use(express.json());

// Routes
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('DB connection error:', err);
    process.exit(1); 
  });

