const User = require('../models/User');

// Handle user registration
const registerUser = async (req, res) => {
    try {
        const { name, gender, aadhar, phone, age } = req.body;

        // Check if user already exists using Aadhar as a unique identifier
        const userExists = await User.findOne({ aadhar });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'User already registered with this Aadhar'
            });
        }

        const user = await User.create({
            name,
            gender,
            aadhar,
            phone,
            age
        });

        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error registering user',
            error: error.message
        });
    }
};

module.exports = {
    registerUser
};
