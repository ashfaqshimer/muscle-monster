import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

export const getCollections = async () => {
	const response = await axios.get(`${BASE_URL}/api/v1/collections`);
	return response.data;
};

export const getCollectionBySlug = async (slug, { page = 1, limit = 20 }) => {
	const query = `page=${page}&limit=${limit}`;

	const response = await axios.get(
		`${BASE_URL}/api/v1/collections/${slug}?${query}`
	);
	return response.data;
};
