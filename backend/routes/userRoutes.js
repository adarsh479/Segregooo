const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route to register user
router.post('/register', async (req, res) => {
    try {
        

        const { name, gender, aadhar, phone, age } = req.body;

        // Validation: Check if all fields are provided
        if (!name || !gender || !aadhar || !phone || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Save to DB
        const user = await User.create({ name, gender, aadhar, phone, age });

        
        res.status(201).json(user);
    } catch (error) {
        console.error("Registration error:", error.message); // Log error
        res.status(400).json({ message: "Registration failed", error: error.message });
    }
});




module.exports = router; 