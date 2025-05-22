const express = require('express');
const { register, login, logout, me } = require('../controllers/authController');
const { checkAuth } = require('../middlewares/auth');

const authRouter = express.Router();

// setup the routes
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/me', checkAuth, me);

module.exports = authRouter;