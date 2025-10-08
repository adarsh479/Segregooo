const mongoose = require('mongoose');

const ecoNidhiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    donationAmount: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('EcoNidhi', ecoNidhiSchema);
