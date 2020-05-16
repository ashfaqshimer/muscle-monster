const mongoose = require('mongoose');
const shortid = require('shortid');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name is required'],
	},
	price: {
		type: Number,
		required: true,
	},
	imageUrl: {
		type: String,
	},
	sku: {
		type: String,
		unique: true,
		default: shortid.generate(),
	},
	description: {
		type: String,
		required: [true, 'description is required'],
	},
	quantityAvailable: {
		type: Number,
		default: 0,
	},
	collection: {
		type: mongoose.Schema.ObjectId,
		ref: 'Collection',
		required: true,
	},
});

module.exports = mongoose.model('Product', ProductSchema);
