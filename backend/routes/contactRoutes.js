const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to save contact form data
router.post('/', async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router; 