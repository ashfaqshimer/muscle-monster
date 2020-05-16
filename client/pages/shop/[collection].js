import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './[collection].scss';
import {
	selectCollection,
	selectIsCollectionFetching,
} from '../../redux/shop/shopSelectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='CollectionPage'>
			<h2>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
	isLoading: selectIsCollectionFetching,
});

// Container With Spinner
const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
