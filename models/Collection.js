const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a category name'],
			unique: true,
			trim: true,
			maxlength: [50, 'Name can not be more than 50 characters'],
		},
		title: {
			type: String,
		},
		imageUrl: {
			type: String,
		},
		description: {
			type: String,
			trim: true,
		},
		tags: [
			{
				name: {
					type: String,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Collection', CollectionSchema);
