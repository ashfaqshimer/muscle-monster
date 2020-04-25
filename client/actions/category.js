import { GET_CATEGORIES } from './types';
import { v4 as uuid } from 'uuid';

export const getCategories = (msg, alertType) => (dispatch) => {
	const id = uuid();
	dispatch({
		type: GET_CATEGORIES,
		payload: { msg, alertType, id },
	});
};
