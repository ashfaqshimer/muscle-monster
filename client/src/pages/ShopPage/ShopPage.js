import React from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = () => {
	return (
		<div>
			{SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default ShopPage;
