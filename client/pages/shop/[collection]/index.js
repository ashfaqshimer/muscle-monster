import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import { getCollectionBySlug, getCollections } from '../../../actions/shop';

import './[collection].scss';

import ProductList from '../../../components/ProductList/ProductList';
import Loader from '../../../components/Loader/Loader';

const CollectionPage = ({
	collection,
	totalProducts,
	hasNextPage,
	productsLimit,
}) => {
	const { name, products } = collection;
	const [limit, setLimit] = useState(productsLimit);
	const [page, setPage] = useState(1);
	const [loadedProducts, setLoadedProducts] = useState(products);
	const [isNextPage, setIsNextPage] = useState(hasNextPage);
	const [isLoading, setIsLoading] = useState(false);

	const handleLoad = async () => {
		try {
			const newPage = page + 1;
			setIsLoading(true);
			const response = await getCollectionBySlug(collection.slug, {
				page: newPage,
				limit,
			});
			if (!response.pagination.next) {
				setIsNextPage(false);
			}
			setLoadedProducts([...loadedProducts, ...response.data.products]);
			setPage(newPage);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	return isLoading ? (
		<Loader />
	) : (
		<div className='CollectionPage'>
			<div className='title'>
				<h2>{name}</h2>
			</div>
			<div>
				<ProductList products={loadedProducts} />
			</div>
			{isNextPage ? (
				<div className='load-more'>
					<Button disabled={isLoading} onClick={handleLoad}>
						Load More
					</Button>
				</div>
			) : null}
		</div>
	);
};

export async function getStaticProps({ params }) {
	const page = 1;
	const limit = 2;

	const response = await getCollectionBySlug(params.collection, {
		page,
		limit,
	});
	const collection = response.data;
	const totalProducts = response.total;
	const hasNextPage = response.pagination.hasOwnProperty('next');

	return {
		props: { collection, totalProducts, hasNextPage, productsLimit: limit },
	};
}

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const collections = await getCollections();
	const sections = collections.data;

	// Get the paths we want to pre-render based on posts
	const paths = sections.map(({ slug }) => ({
		params: { collection: slug },
	}));

	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export default CollectionPage;