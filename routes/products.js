const express = require('express');
const { getProducts, createProduct } = require('../controllers/products');

const Product = require('../models/Product');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

router
	.route('/')
	.get(advancedResults(Product), getProducts)
	.post(createProduct);

module.exports = router;
