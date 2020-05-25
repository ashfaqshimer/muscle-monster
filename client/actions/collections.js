import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

export const getCollections = async () => {
	const response = await axios.get(`${BASE_URL}/api/v1/collections`);
	return response.data;
};
