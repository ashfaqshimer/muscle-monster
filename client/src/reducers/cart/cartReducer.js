import { TOGGLE_CART, ADD_ITEMS } from '../actionTypes';
import { addItemToCart } from './cartUtils';

const INITIAL_STATE = {
	showCart: false,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_CART:
			return { ...state, showCart: !state.showCart };

		case ADD_ITEMS:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};

		default:
			return state;
	}
};

export default cartReducer;
