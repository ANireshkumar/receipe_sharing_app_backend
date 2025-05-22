const authController = {
    register: async (req, res) => {
        try {
            res.json({ message: 'Register Route' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    login: async (req, res) => {
        try {
            res.json({ message: 'Login Route' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    logout: async (req, res) => {
        try {
            res.json({ message: 'Logout Route' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    me: async (req, res) => {
        try {
            res.json({ message: 'Me Route' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = authController;