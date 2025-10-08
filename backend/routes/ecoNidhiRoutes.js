const express = require('express');
const router = express.Router();
const EcoNidhi = require('../models/EcoNidhi');

router.post('/', async (req, res) => {
    try {
        const { name, email, donationAmount, phone } = req.body;

        if (!name || !email || !donationAmount || !phone) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const request = await EcoNidhi.create({ name, email, donationAmount, phone });
        res.status(201).json({ success: true, data: request });
    } catch (error) {
        console.error("Error saving EcoNidhi data:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
