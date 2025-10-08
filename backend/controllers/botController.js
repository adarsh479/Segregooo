const Image = require("../models/BotImage");
const path = require("path");

exports.uploadImage = async (req, res) => {
    try {
        const { location } = req.body;
        const imageFile = req.file;

        if (!imageFile) {
            return res.status(400).json({ message: "No image file uploaded" });
        }

        const newImage = new Image({
            filename: imageFile.filename,
            contentType: imageFile.mimetype,
            filepath: `/uploads/${imageFile.filename}`,
            location: location
        });

        await newImage.save();

        res.status(201).json({ 
            message: "Image uploaded successfully", 
            imageId: newImage._id, 
            filename: imageFile.filename 
        });
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};