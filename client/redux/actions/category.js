import axios from 'axios';

import BASE_URL from '../utils/baseUrl';
import { GET_CATEGORIES, GET_CATEGORIES_ERROR } from './types';

// Gets the product categories
export const getCategories = () => async (dispatch) => {
	try {
		const res = await axios.get(`${BASE_URL}/api/v1/categories`);

		dispatch({
			type: GET_CATEGORIES,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GET_CATEGORIES_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
