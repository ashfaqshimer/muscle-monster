const express = require('express');
const {
	getProducts,
	getProduct,
	createProduct,
	updateProduct
} = require('../controllers/products');

const Product = require('../models/Product');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

router
	.route('/')
	.get(advancedResults(Product), getProducts)
	.post(createProduct);

router
	.route('/:id')
	.get(getProduct)
	.put(updateProduct);

module.exports = router;
