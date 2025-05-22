const express = require('express');
const logger = require('./middlewares/logger');
const cookieParser = require('cookie-parser');
const errorRoute = require('./middlewares/errorRoute');

// create express app
const app = express();

// parse the request body as JSON
app.use(express.json());

// parse the cookies
app.use(cookieParser());

app.use(logger);

app.get('/api/v1', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// error route
app.use(errorRoute);

module.exports = app;