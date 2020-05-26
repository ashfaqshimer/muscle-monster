const mongoose = require('mongoose');
const slugify = require('slugify');

const CollectionSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a category name'],
			unique: true,
			trim: true,
			maxlength: [50, 'Name can not be more than 50 characters'],
		},
		slug: {
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
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// Reverse populate with virtuals
CollectionSchema.virtual('products', {
	ref: 'Product',
	localField: '_id',
	foreignField: 'productCollection',
	justOne: false,
});

// Create bootcamp slug from name
CollectionSchema.pre('save', function (next) {
	this.slug = slugify(this.name, { lower: true });
	next();
});

module.exports = mongoose.model('Collection', CollectionSchema);
