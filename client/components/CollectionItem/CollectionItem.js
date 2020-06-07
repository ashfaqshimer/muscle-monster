import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cartActions';
import {
	CollectionItemContainer,
	BackgroundImage,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
	AddButton,
} from './CollectionItem.styles';

// Make these cards that display name, price and image
const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<BackgroundImage className='image' imageUrl={imageUrl}></BackgroundImage>
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton onClick={() => addItem(item)} inverted>
				Add to cart
			</AddButton>
		</CollectionItemContainer>
	);
};

// const mapDispatchToProps = (dispatch) => ({
// 	addItem: (item) => dispatch(addItem(item)),
// });

export default CollectionItem;