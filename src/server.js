const express = require('express');

const app = express();

// Check to see if in production, add a handler to serve up js assets
if (process.env.ENVIRONMENT === 'prod') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(
			path.resolve(__dirname, '../', 'client', 'build', 'index.html')
		);
	});
}

// Server configuration
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log('App listening on port', PORT);
});
