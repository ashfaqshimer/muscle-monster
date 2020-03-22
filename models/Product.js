const mongoose = require('mongoose');
const shortid = require('shortid');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name is required']
	},
	price: {
		type: Number,
		required: true
	},
	sku: {
		type: String,
		unique: true,
		default: shortid.generate()
	},
	description: {
		type: String,
		required: [true, 'description is required']
	},
	quantityAvailable: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('Product', ProductSchema);
