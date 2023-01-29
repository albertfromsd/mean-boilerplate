const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'temporarySecret';

async function authenticateUser( req, res, next ) {

    next();
}

module.exports = {
    authenticateUser
}