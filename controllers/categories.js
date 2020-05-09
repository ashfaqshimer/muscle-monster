const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const Category = require('../models/Category');

const fs = require('fs');

// @desc    Get all categories
// @route   GET /api/v1/categories
// @access  Public
exports.getCategories = asyncHandler(async (req, res, next) => {
	res.status(200).json(res.advancedResults);
});

// @desc    Get a single category
// @route   GET /api/v1/categories/:id
// @access  Public
exports.getCategories = asyncHandler(async (req, res, next) => {
	const category = await Category.findById(req.params.id);

	if (!category) {
		return next(new ErrorResponse(`Category ${req.params.id} not found`));
	}

	res.status(200).json({
		success: true,
		data: category,
	});
});

// @desc    Create category
// @route   POST /api/v1/categories/
// @access  Public
exports.createCategory = asyncHandler(async (req, res, next) => {
	const category = await Category.create(req.body);

	res.status(201).json({
		success: true,
		data: category,
	});
});
