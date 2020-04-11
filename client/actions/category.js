import { GET_CATEGORIES } from './types';
import uuid from 'uuid/v4';

export const getCategories = (msg, alertType) => (dispatch) => {
	const id = uuid();
	dispatch({
		type: GET_CATEGORIES,
		payload: { msg, alertType, id }
	});
};
