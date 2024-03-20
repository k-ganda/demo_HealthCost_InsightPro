const mysql = require("mysql");

const db = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
});

exports.form = (req, res) => {
	console.log(req.body);

	Swal.fire({
		title: "Form Submitted",
		text: "Your form has been submitted successfully!",
		icon: "success",
	});

	const { name, email, password, passwordConfirm } = req.body;

	db.query(
		"SELECT email FROM users WHERE email = ?",
		[email],
		(err, result) => {
			if (err) {
				console.log(err);
			}
			if (result.length > 0) {
				return res.render("register", {
					message: "Email already exists",
				});
			} else if (password !== passwordConfirm) {
				return res.render("register", {
					message: "Passwords do not match",
				});
			}
		}
	);
	res.send("Form submitted");
};
/**

exports.writeRecommendation = (req, res) => {
	const recommendation = req.body.recommendation;

	// Save the recommendation to the database
	// Implement the database saving logic here

	// Send a response or redirect as needed
	res.send("Recommendation submitted successfully");
};

exports.writeReport = (req, res) => {
	const report = req.body.report;

	// Save the report to the database
	// Implement the database saving logic here

	// Send a response or redirect as needed
	res.send("Report submitted successfully");
};

exports.getContactPersonDashboard = (req, res) => {
	const contactPerson = {
		name: "",
		role: "Contact Person",
		email: "john.doe@example.com",
	};

	// Fetch recommendations and reports from the database
	const recommendations = [
		"Recommendation 1",
		"Recommendation 2",
		"Recommendation 3",
	];
	const reports = ["Report 1", "Report 2", "Report 3"];

	res.render("contact_person_dashboard", {
		contactPerson,
		recommendations,
		reports,
	});
};

exports.getRecommendations = (req, res) => {
	// Fetch recommendations from the database
	const recommendations = [
		"Recommendation 1",
		"Recommendation 2",
		"Recommendation 3",
	];
	res.json({ recommendations });
};

exports.getReports = (req, res) => {
	// Fetch reports from the database
	const reports = ["Report 1", "Report 2", "Report 3"];
	res.json({ reports });
};
*/
