const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Update with your MongoDB URI

// Database Name
const dbName = 'test'; // Update with your database name

// User ID to search for
const userId = '65fb0ee83eb31f6253df14fe'; // Update with the user ID you want to retrieve

// Create a new MongoClient
const client = new MongoClient(uri);

async function retrieveUserDocument() {
	try {
		await client.connect();
		const database = client.db(dbName);
		const usersCollection = database.collection('users'); // Update with your collection name

		const user = await usersCollection.findOne({ _id: userId });
		console.log(user);
	} catch (error) {
		console.error('Error retrieving user document:', error);
	} finally {
		await client.close();
	}
}

retrieveUserDocument();
