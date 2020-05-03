import { GET_CATEGORIES, GET_CATEGORIES_ERROR } from '../actions/types';

const initialState = {
	categories: [],
	loading: true,
	error: {},
	total: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: payload.data,
				total: payload.total,
				loading: false,
			};

		case GET_CATEGORIES_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};

		default:
			return state;
	}
}
