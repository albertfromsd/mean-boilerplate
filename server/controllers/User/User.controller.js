// [ MODEL + RELATED UTILS ]
const { User } = require('../../models/index.model');
const { userGetByID } = require('./User.controller.utils');

// [ SECURITY ]
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// [ ENV ] remember to update/create the below variables in .env
const SECRET_KEY = process.env || 'temporarySecret';
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || 10);

// [ USER CONTROLLER ]
async function userGet( req, res ) {
    try {
        return res.json({message: 'userGet completed'});
    } catch(err) {
        console.log(err)
    }
}

async function userGetAll( req, res ) {
    try {
        const users = await User.find().select('-password');

        return res.status(200).json(users);
    } catch(err) {
        return res.status(500).json({
            status: 500, 
            message: "Server error", 
            error: err
        });
    }
}

async function userRegister( req, res ) {
    console.log('server userRegister', req.body)
    try {
        const { username, firstname, lastname, email } = req.body;
        const newUser = await User.create({
            username, firstname, lastname, email
        });
        if( !newUser ) throw new Error(400);
        await newUser.save();

        return res.status(200).json(newUser);
    } catch(error) {
        if( error.message === String('400') ) {
            return res.status(400),json({message: 'Bad Request', error});
        } else {
            return res.status(500).json({message: 'Server Error', error});
        }
    }
}

async function userLogin( req, res ) {

}

async function userEdit( req, res ) {

}

async function userLogout( req, res ) {

}

// consistent exports
module.exports = {
    userGet,
    userGetAll,
    userRegister,
    userLogin,
    userEdit,
    userLogout
}