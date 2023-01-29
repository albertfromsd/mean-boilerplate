const mongoose = require('mongoose');

// Remember to create/update .env file with the below variables
const { MONGO_URI, PROJECT_NAME } = process.env;

mongoose.set('strictQuery', true);
mongoose.connect(`${MONGO_URI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log(`[${PROJECT_NAME}] Established a connection to the database`)
}).catch(err => {
    console.log(`[ERROR: ${PROJECT_NAME}] Could not connect to the database: `, err)
});

module.exports = mongoose.connection;