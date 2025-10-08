const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const botController = require("../controllers/botController");

router.post("/upload", upload.single("wasteImage"), botController.uploadImage);

module.exports = router;
