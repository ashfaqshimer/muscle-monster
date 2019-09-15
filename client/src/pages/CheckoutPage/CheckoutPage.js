import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {
	selectCartItems,
	selectCartTotal
} from '../../redux/cart/cartSelectors';
import './CheckoutPage.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className='CheckoutPage'>
			<div className='row checkout-header'>
				<div className='col-3 header-block'>
					<span>Product</span>
				</div>
				<div className='col-3 header-block'>
					<span>Description</span>
				</div>
				<div className='col-2 header-block'>
					<span>Quantity</span>
				</div>
				<div className='col-3 header-block'>
					<span>Price</span>
				</div>
				<div className='col-1 header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className='total'>TOTAL: ${total}</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
