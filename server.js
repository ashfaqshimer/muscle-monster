const express = require('express');

const app = express();

// Server configuration
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log('App listening on port', PORT);
});
