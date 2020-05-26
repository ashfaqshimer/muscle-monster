import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

export const getCollections = async () => {
	const response = await axios.get(`${BASE_URL}/api/v1/collections`);
	return response.data;
};

export const getCollectionBySlug = async (slug) => {
	const response = await axios.get(`${BASE_URL}/api/v1/collections/${slug}`);
	return response.data;
};
