// [ SERVER ]
const express = require('express');
const app = express();
const { routes } = require('./routes/index.routes');
require('dotenv').config();

// [ MIDDLEWARES ]
app.use('/', express.json()); // parse requests with JSON payload/body
app.use(express.urlencoded({ extended: true }));

// CORS
const CLIENT = process.env.CLIENT_PORT || 4200;
const cors = require('cors');
app.use(cors({
    credentials: true,
    origin: `http://localhost:${CLIENT}`
}));

// [ ROUTES ]
routes.User(app);
app.all('*', (req, res) => {
    res.status(404).json({error: 'resource not found'});
});

module.exports = app;