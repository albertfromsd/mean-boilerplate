const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

// [ UTILS ]

// [ MODELS ]

async function run() {
    try {
        mongoose.connect(MONGO_URI);
        console.log('Seed connected to DB');

        /*
        // [ DB RESET ]
        if( await User.collection ) await User.collection.drop();
        */

        console.log( `Seed completed` );
    } catch(error) {
        console.log(error);
    } finally {
        // setTimeout because connection was closing faster than it takes for the seed to be created
        setTimeout(() => {mongoose.connection.close() }, 1500 );
    }
}

run().catch(console.dir)