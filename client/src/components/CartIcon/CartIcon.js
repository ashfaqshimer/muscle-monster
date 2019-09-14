import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../reducers/cart/cartActions';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/11.3 shopping-bag.svg';

const CartIcon = ({ cartItems, toggleCart }) => {
	return (
		<div className='CartIcon' onClick={toggleCart}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartItems.length}</span>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

const mapDispatchToProps = (dispatch) => ({
	toggleCart: () => dispatch(toggleCart())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartIcon);
