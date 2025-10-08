const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    aadhar: {
        type: String,
        required: true,
          // Ensuring Aadhar is unique
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('User', userSchema);
