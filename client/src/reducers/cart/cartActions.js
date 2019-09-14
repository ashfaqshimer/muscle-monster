import { TOGGLE_CART, ADD_ITEMS } from '../actionTypes';

export const toggleCart = () => ({ type: TOGGLE_CART });

export const addItem = (item) => ({
	type: ADD_ITEMS,
	payload: item
});
