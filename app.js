const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");
const hbs = require("hbs");

dotenv.config({ path: "./.env" });

const app = express();

// Set up MySQL connection
const db = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Set up Handlebars as the view engine
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));

db.connect((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("MYSQL Connected...");
	}
});

// Admin Dashboard
app.get("/admin/dashboard", (req, res) => {
	// Fetch data for all contact persons from the database
	db.query("SELECT * FROM contact_persons", (error, results) => {
		if (error) {
			console.log(error);
			res.status(500).send("Internal Server Error");
		} else {
			// Render the admin dashboard view with the data
			res.render("admin_dashboard", { contactPersons: results });
		}
	});
});

// Contact Person Dashboard
app.get("/contact-person/dashboard/:id", (req, res) => {
	const contactPersonId = req.params.id;
	// Fetch data specific to the logged-in contact person from the database
	db.query(
		"SELECT * FROM contact_persons WHERE id = ?",
		contactPersonId,
		(error, results) => {
			if (error) {
				console.log(error);
				res.status(500).send("Internal Server Error");
			} else {
				// Render the contact person dashboard view with the data
				res.render("contact_person_dashboard", { contactPerson: results[0] });
			}
		}
	);
});

//Define routes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(5000, () => {
	console.log("Server started on port 5000");
});
