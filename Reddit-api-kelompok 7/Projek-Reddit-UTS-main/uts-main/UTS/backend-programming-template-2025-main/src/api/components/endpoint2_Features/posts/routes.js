const router = express.Router();
const PostsController = require('./controllers/posts.controller');

router.get('/hot', PostsController.getHotPosts);
module.exports = router;