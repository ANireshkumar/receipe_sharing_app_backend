const express = require('express');
const { getAllUsers } = require('../controllers/adminController');
const auth = require('../middlewares/auth');

const adminRouter = express.Router();

adminRouter.get('/users', auth.checkAuth, auth.allowRoles(['admin']), getAllUsers);

module.exports = adminRouter;