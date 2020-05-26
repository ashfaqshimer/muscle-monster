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

// @desc    Get a single collection
// @route   GET /api/v1/Collections/:slug
// @access  Public
exports.getCollection = asyncHandler(async (req, res, next) => {
	const collection = await Collection.findOne({
		slug: req.params.slug,
	}).populate('products');

	if (!collection) {
		return next(new ErrorResponse(`Collection ${req.params.slug} not found`));
	}

	res.status(200).json({
		success: true,
		data: collection,
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
