// next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withSass({
	/* config options here */
	env: {
		BASE_URL: 'http://localhost:5000/',
	},
});
