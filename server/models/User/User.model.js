const mongoose = require('mongoose');
const objectID = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true,
        required: [true, 'User name is required to register a user'],  
    },
    firstname: {
        type: String, 
        // required: [true, 'User name is required to register a user'],  
    },
    lastname: {
        type: String, 
        // required: [true, 'User name is required to register a user'],  
    },
    email: { 
        type: String, 
        unique: true,
        // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        required: [true, 'Valid email is required to register a user']
    },
    password: { 
        type: String,
        // required: [true, 'Password is required to register user'],
        required: [false, 'Password is required to register user'],
    },
    admin: {
        type: Boolean,
        required: false,
        default: false
    },
    teacherAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
    reference_id: {
        type: objectID, 
        ref: "Model",
        required: false,
    }
}, {timestamps: true});

module.exports = UserSchema;
module.exports.User = mongoose.model("User", UserSchema);