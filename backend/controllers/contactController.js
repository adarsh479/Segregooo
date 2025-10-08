const Contact = require('../models/Contact');

// Handle contact form submission
const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        const contact = await Contact.create({
            name,
            email,
            message
        });
        
        res.status(201).json({
            success: true,
            data: contact
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error saving contact form',
            error: error.message
        });
    }
};

module.exports = {
    createContact
}; 