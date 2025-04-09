const app = require('./core/server');
const config = require('./core/config');

app.listen(config.port, () => {
  console.log('Server running on http://localhost:${config.port}');
});
