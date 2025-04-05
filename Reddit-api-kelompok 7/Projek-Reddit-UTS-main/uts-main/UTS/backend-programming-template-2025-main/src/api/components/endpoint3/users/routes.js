const router = express.Router();
const UsersController = require('./controllers/users.controller');

router.get('/:username/saved', UsersController.getSavedPosts);
module.exports = router;