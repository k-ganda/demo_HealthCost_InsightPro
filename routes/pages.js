const express = require("express");
const authController = require("../controllers/auth");

const router = express.Router();

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/form", (req, res) => {
	res.render("form");
});
/*
router.get(
	"/contact-person-dashboard",
	authController.getContactPersonDashboard
);
*/

module.exports = router;
