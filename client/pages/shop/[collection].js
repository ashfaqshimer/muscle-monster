import React from 'react';

import { getCollectionBySlug, getCollections } from '../../actions/shop';
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
	console.log(collection);
	const { name, products } = collection;
	return (
		<div className='CollectionPage'>
			<h2>{name}</h2>
			<div className='items'>
				{products.map((product) => (
					<CollectionItem key={product._id} item={product} />
				))}
			</div>
		</div>
	);
};

export async function getStaticProps({ params }) {
	const response = await getCollectionBySlug(params.collection);
	const collection = response.data;

	// Pass post data to the page via props
	return { props: { collection } };
}

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const collections = await getCollections();
	const sections = collections.data;

	// Get the paths we want to pre-render based on posts
	const paths = sections.map(({ slug }) => ({
		params: { collection: slug },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

// Container With Spinner
const CollectionPageContainer = WithSpinner(CollectionPage);

export default CollectionPageContainer;
