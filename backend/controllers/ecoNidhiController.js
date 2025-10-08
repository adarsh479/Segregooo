const EcoNidhi = require('../models/EcoNidhi');

// Handle eco nidhi form submission
const createRequest = async (req, res) => {
    try {
        const { name, email, phone, address, wasteType, quantity } = req.body;
        
        const request = await EcoNidhi.create({
            name,
            email,
            phone,
            address,
            wasteType,
            quantity
        });
        
        res.status(201).json({
            success: true,
            data: request
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error saving eco nidhi request',
            error: error.message
        });
    }
};

module.exports = {
    createRequest
}; 