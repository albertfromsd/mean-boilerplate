const { controller: ctrl } = require('../controllers/index.controller');
const { authenticateUser } = require('../utils/index.utils');

module.exports = function(app) {
    app.get('/users/all', ctrl.user.userGetAll);

    app.post('/users/create', ctrl.user.userRegister);
    app.post('/login', [authenticateUser], ctrl.user.userLogin);

    app.delete('/users/delete/:_id', ctrl.user.userDelete);
}