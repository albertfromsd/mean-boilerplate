const { Ctrl } = require('../controllers/index.controller');
const { authenticateUser } = require('../utils/index.utils');

module.exports = function(app) {
    app.get('/users/all', Ctrl.User.userGetAll);

    app.post('/users/create', Ctrl.User.userRegister);
    app.post('/login', [authenticateUser], Ctrl.User.userLogin);

    app.delete('/users/delete/:_id', Ctrl.User.userDelete);
}