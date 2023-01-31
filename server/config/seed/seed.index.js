const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

// [ MODELS ]
const { User } = require('../../models/index.model');

// [ UTILS ]
const { generateUsers } = require('./User/User.seed');


async function run() {
    try {
        mongoose.connect(MONGO_URI);
        console.log('Seed connected to DB');

        // [ DB RESET ]
        if( await User.collection ) await User.collection.drop();
        
        // [ USERS ]
        const userCount = 10, adminCount = 1;
        const userList = await generateUsers(userCount, adminCount);
        for( let i=0; i<userList.length; i++ ) {
            const user = userList[i];
            const newUser = await User.create({ ...user });
            await newUser.save();
        }


        console.log( `Seed completed` );
    } catch(error) {
        console.log(error);
    } finally {
        // setTimeout because connection was closing faster than it takes for the seed to be created
        setTimeout(() => {mongoose.connection.close() }, 1500 );
    }
}

run().catch(console.dir)