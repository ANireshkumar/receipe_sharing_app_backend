const express = require('express');
const logger = require('./middlewares/logger');
const cookieParser = require('cookie-parser');
const errorRoute = require('./middlewares/errorRoute');
const authRouter = require('./routes/authRoutes');
const cors = require('cors');
const postRouter = require('./routes/postRoutes');

// create express app
const app = express();

// enable CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// parse the request body as JSON
app.use(express.json());

// parse the cookies
app.use(cookieParser());

app.use(logger);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/posts', postRouter);

// error route
app.use(errorRoute);

module.exports = app;