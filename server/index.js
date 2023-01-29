const app = require('./server');
const connection = require('./config/mongoose.config');
const { SERVER_PORT, PROJECT_NAME } = process.env;

connection.once('open', () => {
  app.listen(SERVER_PORT, () => {
    console.log(`${PROJECT_NAME} is up and running on port ${SERVER_PORT}`);
  });
});