import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import './ShopPage.scss';

const CollectionOverview = ({ collections, fetchCollectionsStartAsync }) => {
	useEffect(() => {
		console.log('useEffect');
		fetchCollectionsStartAsync();
	}, []);

	return (
		// <div className='CollectionOverview'>
		// 	{collections.map(({ id, ...otherCollectionProps }) => (
		// 		<CollectionPreview key={id} {...otherCollectionProps} />
		// 	))}
		// </div>
		<div>Shop Page</div>
	);
};

const mapStateToProps = createStructuredSelector({
	// collections: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);
