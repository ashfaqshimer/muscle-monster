const app = require('../app');
const request = require('supertest');
const shortid = require('shortid');
const Product = require('../models/Product');
const { setupDatabase } = require('../seeder');

beforeAll(setupDatabase);

describe('GET /products', () => {
	test('Should return products', async () => {
		const response = await request(app)
			.get('/api/v1/products')
			.expect(200);
		expect(response.body.count).toBe(4);
		expect(response.body.total).toBe(4);
	});
});
describe('GET /products with query params', () => {
	test('should return paginated products with next for page=1 and limit=2', async () => {
		const response = await request(app)
			.get('/api/v1/products?page=1&limit=2')
			.expect(200);
		expect(response.body.count).toBe(2);
		expect(response.body.total).toBe(4);
		expect(response.body.pagination).toMatchObject({
			next: { limit: 2, page: 2 }
		});
		expect(response.body.pagination).not.toHaveProperty('prev');
	});
	test('should return paginated products with previous for page=2 and limit=2', async () => {
		const response = await request(app)
			.get('/api/v1/products?page=2&limit=2')
			.expect(200);
		expect(response.body.count).toBe(2);
		expect(response.body.total).toBe(4);
		expect(response.body.pagination).toMatchObject({
			prev: { limit: 2, page: 1 }
		});
		expect(response.body.pagination).not.toHaveProperty('next');
	});
	test('should return paginated products with next and previous for page=2 and limit=1', async () => {
		const response = await request(app)
			.get('/api/v1/products?page=2&limit=1')
			.expect(200);
		expect(response.body.count).toBe(1);
		expect(response.body.total).toBe(4);
		expect(response.body.pagination).toMatchObject({
			prev: { limit: 1, page: 1 },
			next: { limit: 1, page: 3 }
		});
	});
	test('should return two products when price is set to LTE 102.22', async () => {
		const response = await request(app)
			.get('/api/v1/products?price[lte]=102.22')
			.expect(200);
		expect(response.body.count).toBe(2);
		expect(response.body.total).toBe(4);
	});
	test('should return one product when price is set to GT 1000', async () => {
		const response = await request(app)
			.get('/api/v1/products?price[gt]=1000')
			.expect(200);
		expect(response.body.count).toBe(1);
		expect(response.body.total).toBe(4);
	});
});

describe('POST /products', () => {
	test('should successfully save a valid product', async () => {
		const newProduct = {
			_id: '5d713a66ec8f2b88b8f830b9',
			name: 'New Product',
			sku: '10',
			description: 'This is a new product',
			quantityAvailable: 1,
			price: 1890.2
		};
		const response = await request(app)
			.post('/api/v1/products')
			.send(newProduct)
			.expect(201);
		expect(response.body.data).toMatchObject(newProduct);
	});
	test('should throw an error if product with duplicate id is sent', async () => {
		const newProduct = {
			_id: '5d713a66ec8f2b88b8f830b9',
			name: 'New Product',
			sku: '45',
			description: 'This is a new product',
			quantityAvailable: 1,
			price: 1890.2
		};
		const response = await request(app)
			.post('/api/v1/products')
			.send(newProduct)
			.expect(400);
		expect(response.body.error).toBe('Duplicate field value entered');
	});
	test('should throw an error if product with missing required fields is sent', async () => {
		const newProduct = {
			sku: '45',
			description: 'This is a new product',
			quantityAvailable: 1,
			price: 1890.2
		};
		const response = await request(app)
			.post('/api/v1/products')
			.send(newProduct)
			.expect(400);
		expect(response.body.error).toBe('name is required');
	});
});
