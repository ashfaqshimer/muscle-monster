const path = require('path');
const express = require('express');
const morgan = require('morgan');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const connectDb = require('./config/db');

// Connect to database
connectDb();

// Route files
const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');

const errorHandler = require('./middleware/errorHandler');

const app = express();

// Body parsers
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// File uploading
app.use(fileupload());

// ----------------------------------SERVER LOGIC-----------------------------------------------------------

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v1', (req, res) => {
	res.send('Welcome to Muscle Monster API');
});

// Mount routers
app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/categories', categoriesRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;
