const User = require('../models/user');

const adminController = {
    getAllUsers: async (req, res) => {
        try {
            // get all the users
            const users = await User.find().select('-password -__v');
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = adminController;