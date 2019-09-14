import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../reducers/cart/cartActions';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className='CollectionItem'>
			<div
				className='image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CollectionItem);