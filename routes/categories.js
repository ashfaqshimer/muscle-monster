const express = require('express');
const {
	getCategories,
	createCategory,
} = require('../controllers/categories.js');

const Category = require('../models/Category');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

router
	.route('/')
	.get(advancedResults(Category), getCategories)
	.post(createCategory);

// router.route('/:id').get(getProduct).put(updateProduct);

module.exports = router;
