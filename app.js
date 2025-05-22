const express = require('express');
const logger = require('./middlewares/logger');
const cookieParser = require('cookie-parser');
const errorRoute = require('./middlewares/errorRoute');
const authRouter = require('./routes/authRoutes');

// create express app
const app = express();

// parse the request body as JSON
app.use(express.json());

// parse the cookies
app.use(cookieParser());

app.use(logger);

app.use('/api/v1/auth', authRouter);

// error route
app.use(errorRoute);

module.exports = app;