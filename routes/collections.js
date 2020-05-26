const express = require('express');
const {
	getCollections,
	getCollection,
	createCategory,
} = require('../controllers/collections');

const Collection = require('../models/Collection');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

router
	.route('/')
	.get(advancedResults(Collection), getCollections)
	.post(createCategory);

router.route('/:slug').get(getCollection);

module.exports = router;
