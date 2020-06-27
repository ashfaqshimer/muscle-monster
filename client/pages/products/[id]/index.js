// import ProductSummary from '../../../components/Product/ProductSummary';
// import ProductAttributes from '../components/Product/ProductAttributes';

import { getProducts, getProductById } from '../../../actions/shop';

const ProductPage = ({ product, user }) => {
	console.log(product);
	return (
		<div>
			{/* <ProductSummary user={user} {...product} />
			<ProductAttributes user={user} {...product} /> */}
			Product page
		</div>
	);
};

// Product.getInitialProps = async ({ query: { _id } }) => {
// 	try {
// 		const url = `${baseUrl}/api/product`;
// 		const payload = { params: { _id } };
// 		const response = await axios.get(url, payload);

// 	} catch (err) {
// 		console.log(err);
// 	}
// };

export async function getStaticProps({ params }) {
	// Write an action to fetch the product by slug
	const response = await getProductById(params.id);
	return {
		props: { product: response.data },
	};
}

export async function getStaticPaths() {
	// Make call to fetch products
	const { data: products } = await getProducts();

	// Get the paths we want to pre-render based on posts
	const paths = products.map(({ _id }) => ({
		params: { id: _id },
	}));

	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export default ProductPage;
