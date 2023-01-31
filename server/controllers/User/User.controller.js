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
    } catch(error) {
        return res.status(500).json({
            status: 500, 
            message: "Server error", 
            error
        });
    }
}

async function userRegister( req, res ) {
    console.log('server userRegister', req.body)
    try {
        const { username, firstname, lastname, email } = req.body;
        const admin = req.body.admin ? req.body.admin : false;
        const teacherAdmin = req.body.teacherAdmin ? req.body.teacherAdmin : false;
        // uniqueness check
        const usernameCheck = await User.findOne({username});
        const emailCheck = await User.findOne({email});
        if( usernameCheck || emailCheck ) 
            return res.status(400).json({message: 'Account already exists'});
        
        const newUser = await User.create({
            username, firstname, lastname, email, admin, teacherAdmin
        });
        if( !newUser ) throw new Error(400);

        return res.status(200).json(newUser);
    } catch(error) {
        if( error.message === String('400') ) {
            return res.status(400).json({message: 'Bad Request', error});
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

async function userDelete( req, res ) {
    try {
        const { _id } = req.params;
        console.log({_id});
        await User.findOneAndDelete({_id}, (err, user) => {
            if( err ) {
                return res.status(400).json({message: "Account not found"});
            } else {
                console.log('server userDelete: ', user)
                return res.status(200).json({message: "User successfully deleted", user});
            }
        } );
        


    } catch(error) {

    }
}

// consistent exports
module.exports = {
    userGet,
    userGetAll,
    userRegister,
    userLogin,
    userEdit,
    userDelete,
    userLogout
}