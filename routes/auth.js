const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.post('/register', async (req, res) => {
	//Validate data
	//const { error } = registerValidation(req.body);
	//if (error) return res.status(400).send(error.details[0].message);

	//Check if the user is already in the database
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('Email already exists');

	//Hash Passwords
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//Create new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
		role: req.body.role,
		location: req.body.location,
		insurance_name: req.body.insurance_name,
		phone_number: req.body.phone_number,
		excelFiles: req.body.excelFiles,
		Report_and_Recommendation: req.body.Report_and_Recommendation,
	});
	try {
		const savedUser = await user.save();
		res.send({ savedUser });
	} catch (error) {
		res.status(400).json(error);
	}
});

//Login
router.post('/login', async (req, res) => {
	//Check if email exists
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Email does not exist');

	//Check if password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send('Invalid Password');

	//Create and assign a token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	return res.status(200).json({ user: user, token: token });
	// res.header('auth-token', token).send(token);

	//res.send('Logged in');
});

module.exports = router;
