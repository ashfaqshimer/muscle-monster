const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
exports.getProducts = async (req, res, next) => {
	try {
		res.status(200).json(res.advancedResults);
	} catch (err) {
		console.log(err);
	}
};

// @desc    Create product
// @route   POST /api/v1/products/
// @access  Public
exports.createProduct = asyncHandler(async (req, res, next) => {
	const product = await Product.create(req.body);

	res.status(201).json({
		success: true,
		data: product
	});
});
