const path = require('path');
const express = require('express');
const morgan = require('morgan');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');

// Security libraries
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

const errorHandler = require('./middleware/errorHandler');

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// File uploading
app.use(fileupload());

// ----------------------------------SECURITY MIDDLEWARE-----------------------------------------------------------

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({ windowMs: 10 * 60 * 1000, max: 100 }); // 10 mins
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// ----------------------------------SERVER LOGIC-----------------------------------------------------------

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
// app.use('/api/v1/bootcamps', bootcamps);

// Route files
// const bootcamps = require('./routes/bootcamps');

// Error handler
app.use(errorHandler);

module.exports = app;
