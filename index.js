const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const authRoute = require('./routes/auth');

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT).then(() => {
	console.log('Db connected ');
});

// Middlewares
app.use(express.json());
app.use(cors());
//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server started on port 3000'));
