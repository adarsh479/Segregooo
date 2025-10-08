const mongoose = require("mongoose");

const BotImageSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    filepath: String,
    location: String,
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("BotImage", BotImageSchema);