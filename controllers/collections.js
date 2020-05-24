const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const Collection = require('../models/Collection');

const fs = require('fs');

// @desc    Get all collections
// @route   GET /api/v1/collections
// @access  Public
exports.getCollections = asyncHandler(async (req, res, next) => {
	res.status(200).json(res.advancedResults);
});

// @desc    Get a single category
// @route   GET /api/v1/Collections/:id
// @access  Public
exports.getCollection = asyncHandler(async (req, res, next) => {
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
// @route   POST /api/v1/Collections/
// @access  Public
exports.createCategory = asyncHandler(async (req, res, next) => {
	const category = await Category.create(req.body);

	res.status(201).json({
		success: true,
		data: category,
	});
});
