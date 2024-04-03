const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
	},
	email: {
		type: String,
		required: true,
		max: 255,
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 1024,
	},
	role: {
		type: String,
		required: true,
		min: 6,
	},
	location: {
		type: String,
		required: true,
		min: 6,
	},
	insurance_name: {
		type: String,
		required: true,
		min: 6,
		max: 1024,
	},
	phone_number: {
		type: Number,
		required: true,
		max: 9999999999,
	},

	date: {
		type: Date,
		default: Date.now,
	},
	excelFiles: {
		type: String,
		required: false,
	},

	Report_and_Recommendation: {
		type: String,
		required: false,
		min: 6,
	},
});

module.exports = mongoose.model('User', userSchema);
