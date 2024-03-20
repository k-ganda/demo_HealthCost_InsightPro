const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/form", authController.form);

router.post("/", upload.array("files"), (req, res) => {
	// Handle file uploads here
	const files = req.files;
	// Process and save the files as needed
	res.status(200).json({ message: "Files uploaded successfully" });
});
/*
router.post("/admin/write-recommendation", authController.writeRecommendation);
router.post("/admin/write-report", authController.writeReport);
router.get("/recommendations", authController.getRecommendations);
router.get("/reports", authController.getReports);
*/

module.exports = router;
