const { controller: ctrl } = require('../controllers/index.controller');
const { authenticateUser } = require('../utils/index.utils');

module.exports = function(app) {
    app.get('/test', ctrl.user.userGet);
    app.post('/login', [authenticateUser], ctrl.user.userLogin);
}