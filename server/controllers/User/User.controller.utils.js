const { User } = require('../../models/index.model');

// [ UTILITY FUNCTIONS - NON-EXPORTS ]
exports.userGetByID = async( _id ) => {
    try {
        const user = await User.findOne({_id});
        if( !user ) throw new Error;

        console.log('userGetByID: ', user);
        return user;
    } catch(err) {
        console.log('userGetByID Error: ', err);
        return err;
    }
}

exports.userPopulate = async(  ) => {
    // normalize return data
}